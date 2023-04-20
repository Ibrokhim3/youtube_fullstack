import { pool } from "../config/db_config.js";
import path from "path";
import { __dirname } from "../server.js";
import { __filename } from "../server.js";

export const videoCtr = {
  GET_VIDEOS: async (req, res) => {
    try {
      const videos = await pool.query(`SELECT * FROM videos`);
      const { video_title, video_url, created_at, created_by } = videos.rows[0];

      res.status(200).send(videos.rows);
    } catch (error) {
      return console.log(error.message);
    }
  },
  ADD_VIDEO: async (req, res) => {
    try {
      const userData = await pool.query(`SELECT * FROM jwt`);
      const { user_id, user_name, image_title } = userData.rows[0];

      const { video_title } = req.body;
      const { name, data, mimetype, size } = req.files.video;

      console.log(size);

      const filename = Date.now() + path.extname(name);
      const url = path.join(__dirname, "./upload_video/", filename);
      await pool.query(
        `INSERT INTO videos (video_title, created_by, video_url, size) VALUES($1, $2, $3, $4) `,
        [video_title, user_id, url, (size / 1048576).toFixed(2)]
      );

      req.files.video.mv(url);
      res.status(201).send("Video uploaded successfully!");
    } catch (error) {
      return console.log(error.message);
    }
  },
};
