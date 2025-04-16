// models/quizModel.js

const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  score: Number,
  totalQuestions: Number,
  correctAnswers: [
    {
      question: String,
      selectedAnswer: String,
      correctAnswer: String,
    },
  ],
  wrongAnswers: [
    {
      question: String,
      selectedAnswer: String,
    },
  ],
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Quiz = mongoose.model('quizresult', quizSchema);

module.exports = Quiz;
