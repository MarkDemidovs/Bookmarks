import { Router } from "express";
import { getUsers, register, login, createBookmark, deleteBookmark } from "../controllers/users";
import { requireAuth } from "../middleware/auth";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/", requireAuth, getUsers); 
router.post("/bookmarks", requireAuth, createBookmark);
router.delete("/bookmarks/:id", requireAuth, deleteBookmark);

export default router;