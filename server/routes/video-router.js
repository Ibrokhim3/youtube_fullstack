import { Router } from "express";
import { videoCtr } from "../controllers/video-controller.js";
import { verifyToken } from "../middlewares/auth_middleware.js";

const router = Router();

router.post("/add-video", verifyToken, videoCtr.ADD_VIDEO);

export default router;
