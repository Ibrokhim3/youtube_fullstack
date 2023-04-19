import { pool } from "../config/db_config.";

export const videoCtr = {
  ADD_VIDEO: async (req, res) => {
    try {
      const { video_title } = req.body;
      const { name, data, mimetype, size } = req.files.video;

      await pool.query(`INSERT INTO videos (video_title) VALUES($1) `, [
        video_title,
      ]);

      req.files.video.mv("./upload_file/" + filename, function (err) {
        if (err) {
          return res.send(err);
        } else {
          return res.send("File uploaded");
        }
      });

      res.status(201).send("Video added successfully");
    } catch (error) {
      return console.log(error.message);
    }
  },
};
