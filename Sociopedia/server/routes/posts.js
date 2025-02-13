import express from 'express';
import { verifyToken } from '../middleware/auth.js';
import { getUserPosts, likePost, getFeedPosts} from '../controllers/posts.js';

const router = express.Router();

// READ
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);


// Update
router.patch("/:id/like", verifyToken, likePost);

export default router;
