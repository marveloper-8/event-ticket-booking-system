import express from 'express';
import { book, cancel } from '../controllers/bookingController';

const router = express.Router();

router.post('/book', book);
router.post('/cancel', cancel);

export default router;
