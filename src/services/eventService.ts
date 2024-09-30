import { Event } from '../models/event';

export const initializeEvent = async (name: string, totalTickets: number) => {
  return await Event.create({
    name,
    totalTickets,
    availableTickets: totalTickets,
  });
};

export const getEventStatus = async (eventId: number) => {
  return await Event.findByPk(eventId);
};
