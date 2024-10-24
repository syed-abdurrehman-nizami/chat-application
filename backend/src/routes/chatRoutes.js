import express from "express";
import { createChat, getChatsForUser } from "../controllers/chatController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/create", authMiddleware, createChat);
router.get("/", authMiddleware, getChatsForUser);

export default router;
