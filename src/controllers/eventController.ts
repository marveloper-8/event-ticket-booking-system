import { initializeEvent, getEventStatus } from '../services/eventService';
import { Request, Response, NextFunction } from 'express';

// Define a type for an async Express request handler
type AsyncRequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void | Response>;


export const initialize = async (req: Request, res: Response) => {
  try {
    const { name, totalTickets } = req.body;
    const event = await initializeEvent(name, totalTickets);
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ error: 'Error initializing event' });
  }
};

export const status: any = async (req: Request, res: Response) => {
  try {
    const event = await getEventStatus(parseInt(req.params.eventId));
    if (!event) return res.status(404).json({ error: 'Event not found' });
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving event status' });
  }
};
