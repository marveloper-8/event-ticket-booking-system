import express from 'express';
import { initialize, status } from '../controllers/eventController';

const router = express.Router();

router.post('/initialize', initialize);
router.get('/status/:eventId', status);

export default router;
