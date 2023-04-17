import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/auth-router.js";
import morgan from "morgan";
import fileUpload from "express-fileupload";

const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload());
dotenv.config();
app.use("/youtube", authRouter);
const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
  console.log(`${PORT} is running`);
});
