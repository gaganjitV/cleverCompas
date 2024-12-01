const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config(); // To load environment variables

// Importing Routes
const authRoutes = require('./routes/auth'); // Signup and Login routes
const userRoutes = require('./routes/user');  // User data retrieval routes

const app = express();

// Middleware
app.use(cors()); // Enable CORS for all requests 
app.use(bodyParser.json()); // Parse JSON request bodies

// Database Connection
const DB_URI = process.env.MONGO_URI;
mongoose
    .connect(DB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', authRoutes); // Authentication routes
app.use('/api', userRoutes); //protected routes as we make more routs we add it here

// Root Route
app.get('/', (req, res) => {
  res.send('Welcome to the Clever Campas');
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Start Server and also having a fallback port of 5000
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
