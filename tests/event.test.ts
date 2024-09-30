import request from 'supertest';
import app from '../src/app';

describe('Event API', () => {
  it('should initialize a new event', async () => {
    const res = await request(app)
      .post('/events/initialize')
      .send({ name: 'Concert', totalTickets: 100 });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('name', 'Concert');
  });

  it('should return the status of an event', async () => {
    const res = await request(app).get('/events/status/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('availableTickets');
  });
});
