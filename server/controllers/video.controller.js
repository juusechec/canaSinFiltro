import Video from '../models/video';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all videos
 * @param req
 * @param res
 * @returns void
 */
export function getVideos(req, res) {
  Video.find().sort('-fecha').exec((err, videos) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ videos });
  });
}

/**
 * Save a video
 * @param req
 * @param res
 * @returns void
 */
export function addVideo(req, res) {
  console.log(req.body);
  console.log(req.body.video);
  if (!req.body.video.title || !req.body.video.url) {
    res.status(403).end();
  }

  const newVideo = new Video(req.body.video);

  // Let's sanitize inputs
  newVideo.title = sanitizeHtml(newVideo.title);
  newVideo.url = sanitizeHtml(newVideo.url);

  newVideo.categorias = ['recreacion','comedia','drama','random'];
  //newVideo.categorias = ['recreacion','comedia','drama','random'];

  newVideo.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ video: saved });
  });
}

/**
 * Get a single video
 * @param req
 * @param res
 * @returns void
 */
export function getVideo(req, res) {
  Video.findOne({ cuid: req.params.cuid }).exec((err, video) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ video });
  });
}

/**
 * Delete a video
 * @param req
 * @param res
 * @returns void
 */
export function deleteVideo(req, res) {
  Video.findOne({ cuid: req.params.cuid }).exec((err, video) => {
    if (err) {
      res.status(500).send(err);
    }

    video.remove(() => {
      res.status(200).end();
    });
  });
}
