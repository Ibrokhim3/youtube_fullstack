import { pool } from "../config/db_config.js";

export const verifyToken = async (req, res, next) => {
  const userData = await pool.query(`SELECT * FROM jwt`);

  if (!userData.rows[0]) {
    return res.status(400).send("You have to log in to the system!");
  }

  const token = userData.rows[0].token;
  if (
    req.headers.authentication &&
    req.headers.authentication === `Bearer ${token}`
  ) {
    return next();
  }
  res.send("Token doesn't exist or you are not authorized!");
};
