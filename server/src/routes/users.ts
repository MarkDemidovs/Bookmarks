import { Router } from "express";
import { getUsers, register, login } from "../controllers/users";
import { requireAuth } from "../middleware/auth";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/", requireAuth, getUsers); 

export default router;