import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

//console.log('MONGO_URI from env:', process.env.MONGO_URI);

const mongoURI = process.env.MONGO_URI;

export const connectDB = async () => {
  if (!mongoURI) {
    throw new Error('No MongoDB URI!');
  }
  try {
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};