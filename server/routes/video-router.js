import { Router } from "express";
import { videoCtr } from "../controllers/video-controller.js";
import { verifyToken } from "../middlewares/auth_middleware.js";

const router = Router();

router.get("/videos", videoCtr.GET_VIDEOS);
router.get("/user-videos", videoCtr.GET_USER_VIDEOS);
router.post("/add-video", videoCtr.ADD_USER_VIDEOS);
router.put("/update-video", videoCtr.UPDATE_USER_VIDEOS);
router.delete("/delete-video", videoCtr.DELETE_USER_VIDEOS);

export default router;
