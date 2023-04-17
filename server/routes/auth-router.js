import { Router } from "express";
import { authCtr } from "../controllers/auth-controller.js";

const router = Router();

router.post("/registration", authCtr.REGISTER);
router.post("/login", authCtr.LOGIN);
router.get("/get_users/:id", authCtr.GET_USERS);

export default router;
