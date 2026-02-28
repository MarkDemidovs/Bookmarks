import { Request, Response } from "express";
import { pool } from "../db";

export const getUsers = async (_: Request, res: Response) => {
    try {
        const { rows } = await pool.query("SELECT * FROM users");
        res.json(rows);      
    } catch  {
        res.status(500).json({ error: "Failed to fetch users" });
    }
};
