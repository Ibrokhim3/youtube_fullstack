import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/auth-router.js";
import morgan from "morgan";
import fileUpload from "express-fileupload";
import videoRouter from "./routes/video-router.js";

const app = express();

app.use(cors());
app.use(express.json());
// app.use(express.json({ limit: "50mb" }));
// app.use(express.urlencoded({ limit: "50mb" }));
// app.use(
//   fileUpload({
//     limits: { fileSize: 50 * 1024 * 1024 }, // Limit to 50mb
//   })
// );
app.use(fileUpload());
dotenv.config();
app.use("/youtube", authRouter);
app.use("/admin", videoRouter);
const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
  console.log(`${PORT} is running`);
});
