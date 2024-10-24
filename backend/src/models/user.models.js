import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        clerkId: {
            type: String,
            required: true,
            unique: true,
        },
        username: {
            type: String,
            required: true,
        },
        profilePicture: {
            type: String,
            default: "",
        },
        status: {
            type: String,
            default: "Hey there! I am using ChatApp.",
        },
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
