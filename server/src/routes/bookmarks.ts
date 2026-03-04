import { Router } from "express";
import { createBookmark, deleteBookmark, getAllBookmarks, renameBookmark } from "../controllers/bookmarks";
import { requireAuth } from "../middleware/auth";

const router = Router();

router.post("/", requireAuth, createBookmark);
router.delete("/:id", requireAuth, deleteBookmark);
router.get("/", requireAuth, getAllBookmarks);
router.patch("/:id", requireAuth, renameBookmark);

export default router;