import { Router } from "express";
import { createBookmark, deleteBookmark } from "../controllers/bookmarks";
import { requireAuth } from "../middleware/auth";

const router = Router();

router.post("/bookmarks", requireAuth, createBookmark);
router.delete("/bookmarks/:id", requireAuth, deleteBookmark);

export default router;