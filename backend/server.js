const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');


// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Database connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/users', require('./routes/users.routes'));
// app.use('/api/timecapsules', require('../routes/timecapsules.routes'));

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Clyra Time Capsule API is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});