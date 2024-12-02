const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');

const { Server } = require('socket.io'); // Import the Server class from Socket.IO
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

//alowing multple oring for cors for sicket io, this way I was able to chat between my home local internet and local

const allowedOrigins = [
  'http://localhost:3000', 
  'http://localhost:4000', 
  'http://10.0.0.17:3000',   
];

// Create HTTP server for Socket.IO
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: allowedOrigins,/// frontend server
    methods: ['GET', 'POST'],
  },
});

// Socket.IO logic for chat
io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  // Listen for chat messages
  socket.on('sendMessage', (data) => {
    console.log('Message received:', data);
    // Broadcast the message to all connected users
    io.emit('receiveMessage', data);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});


// Start Server and also having a fallback port of 4000
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
