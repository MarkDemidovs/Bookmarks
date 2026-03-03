import { Router } from "express";
import { createBookmark, deleteBookmark, getAllBookmarks } from "../controllers/bookmarks";
import { requireAuth } from "../middleware/auth";

const router = Router();

router.post("/", requireAuth, createBookmark);
router.delete("/:id", requireAuth, deleteBookmark);
router.get("/", requireAuth, getAllBookmarks);

export default router;