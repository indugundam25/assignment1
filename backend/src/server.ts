import express from 'express';
import { connectDB } from './config/db';
import helperRoutes from './routes/helperRoutes';

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/helpers', helperRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});