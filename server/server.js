import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import fileUpload from "express-fileupload";
import path from "path";
import authRouter from "./routes/auth-router.js";
import videoRouter from "./routes/video-router.js";
import { fileURLToPath } from "url";

const app = express();

export const __filename = fileURLToPath(import.meta.url);

export const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
// app.use(express.static(path.join(__dirname, "upload_video")));

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
