import { Event } from '../models/event';
import { Booking } from '../models/booking';
import sequelize from '../config/database';

export const bookTicket = async (userId: number, eventId: number) => {
  const event = await Event.findByPk(eventId);
  if (!event) throw new Error('Event not found');

  return await sequelize.transaction(async (t) => {
    if (event.availableTickets > 0) {
      await Booking.create({ userId, eventId }, { transaction: t });
      await event.update({ availableTickets: event.availableTickets - 1 }, { transaction: t });
      return 'Ticket booked successfully';
    } else {
      return 'Added to waiting list';
    }
  });
};

export const cancelBooking = async (userId: number, eventId: number) => {
  const booking = await Booking.findOne({ where: { userId, eventId, status: 'booked' } });
  if (!booking) throw new Error('Booking not found');

  const event = await Event.findByPk(eventId);
  if (!event) throw new Error('Event not found');  // Handle null case here

  await sequelize.transaction(async (t) => {
    await booking.update({ status: 'cancelled' }, { transaction: t });
    await event.update({ availableTickets: event.availableTickets + 1 }, { transaction: t });
  });

  return 'Booking cancelled';
};
