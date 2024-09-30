import request from 'supertest';
import app from '../src/app';

describe('Booking API', () => {
  it('should book a ticket for a user', async () => {
    const res = await request(app)
      .post('/bookings/book')
      .send({ userId: 1, eventId: 1 });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Ticket booked successfully');
  });

  it('should cancel a booking', async () => {
    const res = await request(app)
      .post('/bookings/cancel')
      .send({ userId: 1, eventId: 1 });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Booking cancelled');
  });
});
