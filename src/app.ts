import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import sequelize from './config/database';
import eventRoutes from './routes/eventRoutes';
import bookingRoutes from './routes/bookingRoutes';

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use('/events', eventRoutes);
app.use('/bookings', bookingRoutes);

const startServer = async () => {
  try {
    await sequelize.sync(); // Syncs models with DB
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error('Unable to start server:', error);
  }
};

startServer();

export default app;
