import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
    {
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        content: {
            type: String,
            required: true,
        },
        chat: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Chat",
        },
        mediaUrl: {
            type: String,
            default: "",
        }, // For media files
    },
    { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
