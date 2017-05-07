import { Router } from 'express';
import * as VideoController from '../controllers/video.controller';
const router = new Router();

// Get all Videos
router.route('/videos').get(VideoController.getVideos);

// Get one post by cuid
router.route('/videos/:cuid').get(VideoController.getVideo);

// Add a new Video
router.route('/videos').post(VideoController.addVideo);

// Delete a post by cuid
router.route('/videos/:cuid').delete(VideoController.deleteVideo);

export default router;
