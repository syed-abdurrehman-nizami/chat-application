import User from "../models/user.models.js";
// import Clerk from "@clerk/clerk-sdk-node";

export const registerUser = async (req, res) => {
    try {
        const { username, clerkId } = req.body;

        const newUser = await User.create({ username, clerkId });
        res.status(201).json(newUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to register user" });
    }
};
