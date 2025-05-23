const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const profileRoutes = require('./routes/profileRoutes');
const dbConfig = require('./config/db');
const quizRoutes = require('./routes/quizRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Database connection
mongoose.connect(dbConfig.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
app.use('/api', profileRoutes);
app.use('/api', quizRoutes);
app.post('/api/chat', (req, res) => {
  const { message } = req.body;
  // Simulate a response from the bot
  const reply = `You said: "${message}". This is a response from Edu Bot.`;
  res.json({ reply });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
