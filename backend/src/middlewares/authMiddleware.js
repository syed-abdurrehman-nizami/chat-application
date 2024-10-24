import { requireAuth } from "@clerk/clerk-sdk-node";

export const authMiddleware = async (req, res, next) => {
    try {
        const session = await requireAuth(req);
        req.user = session.user; // Add user to request
        next();
    } catch (error) {
        res.status(401).json({ error: "Unauthorized" });
    }
};
