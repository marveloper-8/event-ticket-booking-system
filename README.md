# Event Ticket Booking System

## Description

This is a Node.js application for an event ticket booking system. It provides a RESTful API for managing event tickets, handling concurrent bookings, implementing waiting lists, and managing ticket cancellations.

## Features

- Initialize events with a set number of available tickets
- Book tickets concurrently
- Implement waiting lists for sold-out events
- View available tickets and waiting list status
- Handle ticket cancellations with automatic assignment to waiting list users
- Store order details in a relational database

## Technology Stack

- Node.js
- Express.js
- Sequelize ORM
- PostgreSQL (or your chosen RDBMS)
- TypeScript
- Jest for testing

## Project Structure

```
event-ticket-booking-system/
├── src/
│   ├── controllers/
│   │   ├── bookingController.ts
│   │   ├── eventController.ts
│   ├── models/
│   │   ├── booking.ts
│   │   ├── event.ts
│   ├── routes/
│   │   ├── bookingRoutes.ts
│   │   ├── eventRoutes.ts
│   ├── services/
│   │   ├── bookingService.ts
│   │   ├── eventService.ts
│   ├── config/
│   │   ├── database.ts
│   ├── app.ts
├── tests/
│   ├── booking.test.ts
│   ├── event.test.ts
├── jest.config.ts
├── tsconfig.json
├── package.json
├── README.md
├── .env
├── .gitignore
```

## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/event-ticket-booking-system.git
   cd event-ticket-booking-system
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your environment variables:
   Create a `.env` file in the root directory and add the following:
   ```
   DATABASE_URL=your_database_connection_string
   PORT=3000
   ```

4. Run database migrations:
   ```
   npm run migrate
   ```

5. Build the TypeScript code:
   ```
   npm run build
   ```

6. Start the server:
   ```
   npm start
   ```

## Running Tests

To run the test suite:

```
npm test
```

## API Documentation

### Initialize an Event
- **POST** `/initialize`
  - Body: `{ "name": "Event Name", "totalTickets": 100 }`
  - Response: Event details including ID

### Book a Ticket
- **POST** `/book`
  - Body: `{ "userId": 1, "eventId": 1 }`
  - Response: Booking confirmation or waiting list status

### Cancel a Booking
- **POST** `/cancel`
  - Body: `{ "userId": 1, "eventId": 1 }`
  - Response: Cancellation confirmation

### Get Event Status
- **GET** `/status/:eventId`
  - Response: Available tickets and waiting list count

## Design Choices

1. **TypeScript**: Used for type safety and improved developer experience.
2. **Sequelize ORM**: Chosen for its robust features and support for multiple databases.
3. **Express.js**: Used for its simplicity and wide community support.
4. **Modular Architecture**: Controllers, services, and models are separated for better code organization.
5. **Asynchronous Operations**: Promises and async/await are used for handling asynchronous operations.
6. **Error Handling**: Comprehensive error handling is implemented across the application.
7. **Database Migrations**: Used for version control of the database schema.

## Concurrency Handling

- Implemented using database transactions to ensure data consistency during concurrent operations.
- Optimistic locking is used to handle race conditions in ticket booking and cancellation.

## Error Handling

- Custom error classes are used for different types of errors (e.g., NotFoundError, ValidationError).
- Global error handling middleware catches and formats all errors before sending responses.

## Testing Strategy

- Unit tests for services and models.
- Integration tests for API endpoints.
- Mocking of database calls in unit tests for isolation.
