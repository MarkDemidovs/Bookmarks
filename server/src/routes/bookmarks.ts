import { Router } from "express";
import { createBookmark, deleteBookmark, getAllBookmarks } from "../controllers/bookmarks";
import { requireAuth } from "../middleware/auth";

const router = Router();

router.post("/bookmarks", requireAuth, createBookmark);
router.delete("/bookmarks/:id", requireAuth, deleteBookmark);
router.get("/bookmarks", requireAuth, getAllBookmarks);

export default router;