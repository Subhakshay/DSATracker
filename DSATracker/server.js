// server.js

// 1. Import Required Modules
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import connectDB from './config/db.js';

// Import Routes
import authRoutes from './routes/auth.js';
import problemRoutes from './routes/codeforces.js';
import teamRoutes from './routes/team.js';


// Initialize dotenv
dotenv.config();

// 2. Connect to MongoDB
connectDB();

// 3. Initialize Express App
const app = express();

// 4. Middleware Setup
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS

// HTTP request logger middleware for node.js
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// 5. Define Routes
app.use('/api/auth', authRoutes);
app.use('/api/problems', problemRoutes);
app.use('/api/teams', teamRoutes);

// 6. Health Check Route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// 7. Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

// 8. Start the Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
