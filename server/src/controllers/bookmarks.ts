import { Request, Response } from "express";
import { pool } from "../db";

export const createBookmark = async (req: Request, res: Response) => {
    const { url, title } = req.body;
    try {
        const { rows } = await pool.query(
            "INSERT INTO bookmarks (user_id, url, title) VALUES ($1, $2, $3) RETURNING *",
            [(req as any).userId, url, title]
        );
        res.status(201).json(rows[0]);
    } catch {
        res.status(500).json({ error: "Failed to create bookmark" });
    }
};

export const deleteBookmark = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const { rows } = await pool.query("DELETE FROM bookmarks WHERE id = $1 RETURNING *", [id]);
        if (!rows[0]) {
            return res.status(400).json({ error: "bookmark not found "});
        }
        res.status(200).json(rows[0]);
    } catch {
        res.status(500).json({ error: "Failed to delete bookmark "});
    }
}