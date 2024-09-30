import { Request, Response } from 'express';
import { bookTicket, cancelBooking } from '../services/bookingService';

export const book = async (req: Request, res: Response) => {
  try {
    const { userId, eventId } = req.body;
    const message = await bookTicket(userId, eventId);
    res.status(200).json({ message });
  } catch (error) {
    res.status(500).json({ error: 'Error booking ticket' });
  }
};

export const cancel = async (req: Request, res: Response) => {
  try {
    const { userId, eventId } = req.body;
    const message = await cancelBooking(userId, eventId);
    res.status(200).json({ message });
  } catch (error) {
    res.status(500).json({ error: 'Error cancelling booking' });
  }
};
