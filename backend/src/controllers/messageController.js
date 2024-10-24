import Message from "../models/message.models.js";
import Chat from "../models/chat.models.js";

export const sendMessage = async (req, res) => {
    const { chatId, content, mediaUrl } = req.body;

    const message = await Message.create({
        sender: req.user._id,
        content,
        chat: chatId,
        mediaUrl,
    });

    await Chat.findByIdAndUpdate(chatId, { latestMessage: message });

    res.status(201).json(message);
};
