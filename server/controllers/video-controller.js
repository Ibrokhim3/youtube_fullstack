import { pool } from "../config/db_config.js";
import path from "path";
import { __dirname } from "../server.js";
import { __filename } from "../server.js";

export const videoCtr = {
  GET_VIDEOS: async (req, res) => {
    try {
      const videos = await pool.query(
        `SELECT * FROM videos v JOIN users u ON v.created_by = u.user_id`
      );

      res.status(200).send(videos.rows);
    } catch (error) {
      return console.log(error.message);
    }
  },
  ADD_VIDEO: async (req, res) => {
    try {
      const userData = await pool.query(`SELECT * FROM jwt`);
      const { user_id, user_name, image_title } = userData.rows[0];
      // const userData = await pool.query(`SELECT * FROM jwt`);
      // const { user_id, user_name, image_title } = userData.rows[0];

      const { video_title, cloud_url, name, mimetype, size } = req.body;
      // const { name, data, mimetype, size } = req.files.video;

      // const filename = Date.now() + path.extname(name);
      // const url = path.join(__dirname, "./upload_video/", filename);
      await pool.query(
        `INSERT INTO videos (video_title, created_by, video_url, size) VALUES($1, $2, $3, $4) `,
        [video_title, user_id, cloud_url, (+size / 1048576).toFixed(2)]
      );

      // req.files.video.mv(url, function (err) {
      //   if (err) {
      //     return res.send(err);
      //   }
      // });

      res.status(201).send("Video uploaded successfully!");
    } catch (error) {
      return console.log(error.message);
    }
  },
  GET_USER_VIDEOS: async (req, res) => {
    try {
      const userData = await pool.query(`SELECT * FROM jwt`);
      const { user_id, user_name, image_title } = userData.rows[0];
      const userVideos = await pool.query(
        `SELECT * FROM videos where created_by=$1`,
        [user_id]
      );
      res.status(200).send({ msg: "User videos", userVideos: userVideos.rows });
    } catch (error) {
      return console.log(error.message);
    }
  },
  UPDATE_USER_VIDEOS: async (req, res) => {
    try {
      const { id, video_title } = req.body;

      const { id: id2, video_title: video_title2 } = videoCtr.GET_VIDEOS;
      await pool.query(`UPDATE videos SET video_title=$1 where id=$2`, [
        video_title,
        id,
      ]);
      res.status(200).send({ msg: "Video updated successfully", id2 });
    } catch (error) {
      return console.log(error.message);
    }
  },
};
