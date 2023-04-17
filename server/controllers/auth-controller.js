import path from "path";
import { pool } from "../config/db_config.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const authCtr = {
  REGISTER: async (req, res) => {
    const { username, password } = req.body;
    const { name, data, mimetype, size } = req.files.img;
    // const filepath = req.files.file.tempFilePath;
    const filename = Date.now() + path.extname(name);

    const foundedUser = await pool.query(
      `SELECT * from users where user_name=$1`,
      [username]
    );

    if (foundedUser.rows[0]) {
      return res.status(400).send("Username already exists");
    }

    const hashPsw = await bcrypt.hash(password, 12);

    await pool.query(`INSERT INTO images (img_name, img) VALUES ($1,$2)`, [
      filename,
      data,
    ]);

    const imgId = await pool.query(
      `SELECT image_id from images where img_name=$1 `,
      [filename]
    );

    await pool.query(
      `INSERT INTO users(user_name, password, image_id) VALUES($1, $2, $3)`,
      [username, hashPsw, imgId.rows[0].image_id]
    );

    // await pool.query(
    //   `INSERT INTO image_files(filename, filepath, mimetype, size, user_id) VALUES($1,$2,$3, $4, $5)`,
    //   [filename, filepath, mimetype, size, foundedUser.rows[0].id]
    // );

    // req.files.file.mv("./images/" + filename, function (err) {
    //   if (err) {
    //     return res.send(err);
    //   } else {
    //     return res.send("File uploaded");
    //   }
    // });
    res.status(201).send("User successfully regsitrated!");
  },
  GET_USERS: async (req, res) => {
    const { id } = req.params;
    const images = await pool.query(`SELECT * FROM image_files where id=$1`, [
      id,
    ]);

    return res.json(images.rows[0]);
  },
  LOGIN: async (req, res) => {
    try {
      const { username, password } = req.body;
      const foundedUser = await pool.query(
        `SELECT * FROM users WHERE user_name = $1`,
        [username]
      );
      if (!foundedUser.rows[0]) {
        return res.status(404).send("User not found");
      }

      const psw = await bcrypt.compare(password, foundedUser.rows[0].password);

      if (psw) {
        let token = jwt.sign(
          {
            user_id: foundedUser.rows[0].user_id,
            user_name: foundedUser.rows[0].user_name,
          },
          process.env.SECRET_KEY,
          {
            expiresIn: process.env.JWT_TIME,
          }
        );

        const userInfo = jwt.verify(token, process.env.SECRET_KEY);
        const { user_id, user_name } = userInfo;

        const jwtInfo = await pool.query(`SELECT * FROM JWT`);

        if (!jwtInfo.rows[0]) {
          await pool.query(
            `INSERT INTO jwt(user_id, user_name, token) VALUES($1, $2,$3) `,
            [user_id, user_name, token]
          );
        }
        await pool.query(`UPDATE jwt SET user_id=$1, user_name=$2, token=$3 `, [
          user_id,
          user_name,
          token,
        ]);

        return res.send({
          msg: `You're logged in as a(n) ${user_name}!`,
          token,
        });
      }
      res.send("Incorrect password!");
    } catch (error) {
      return console.log(error.message);
    }
  },
};
