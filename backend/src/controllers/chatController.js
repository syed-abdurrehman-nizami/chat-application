import Chat from "../models/chat.models.js";
import User from "../models/user.models.js";

export const createChat = async (req, res) => {
    const { users, isGroupChat, groupName } = req.body;

    if (!users || users.length < 2) {
        return res
            .status(400)
            .json({ error: "At least two users are required" });
    }

    const chat = await Chat.create({
        users,
        isGroupChat,
        groupName: isGroupChat ? groupName : "",
    });

    res.status(201).json(chat);
};

export const getChatsForUser = async (req, res) => {
    try {
        const chats = await Chat.find({ users: req.user._id })
            .populate("users", "username profilePicture")
            .populate("latestMessage");

        res.json(chats);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch chats" });
    }
};
