import express from 'express';
import cors from 'cors';
import { configDotenv } from 'dotenv';
import connectDB from './config/db.js';
import userRouter from './router/userRouter.js';
import adminRouter from './router/adminRouter.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Initialize environment variables
configDotenv();

// Initialize the app
const app = express();
const port = process.env.PORT || 4000;

// Get the current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API routes
app.use('/api/upload', userRouter);
app.use('/api/admin', adminRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

// Port listener
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
    connectDB(); // Connect to the database
});
