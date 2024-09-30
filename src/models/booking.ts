import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

export class Booking extends Model {
  public id!: number;
  public userId!: number;
  public eventId!: number;
  public status!: string;
}

Booking.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    eventId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'booked', // can be 'booked' or 'cancelled'
    },
  },
  { sequelize, modelName: 'booking' }
);
