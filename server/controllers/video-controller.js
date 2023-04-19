import { pool } from "../config/db_config.js";
import path from "path";

const userData = await pool.query(`SELECT * FROM jwt`);
const { user_id, user_name, image_title } = userData.rows[0];

export const videoCtr = {
  ADD_VIDEO: async (req, res) => {
    try {
      console.log(req.headers);
      const { video_title } = req.body;
      const { name, data, mimetype, size } = req.files.video;

      const filename = Date.now() + path.extname(name);

      await pool.query(
        `INSERT INTO videos (video_title, created_by) VALUES($1, $2) `,
        [video_title, user_id]
      );

      req.files.video.mv("./upload_video/" + filename, function (err) {
        if (err) {
          return res.send(err);
        }
      });
      res.status(201).send("Video uploaded successfully!");
    } catch (error) {
      return console.log(error.message);
    }
  },
};
