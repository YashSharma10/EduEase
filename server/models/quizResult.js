// models/quizResult.js
const mongoose = require('mongoose');

const quizResultSchema = new mongoose.Schema({
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
      correctAnswer: String,
    },
  ],
  timestamp: { type: Date, default: Date.now },
});

const QuizResult = mongoose.model('QuizResult', quizResultSchema);

module.exports = QuizResult;
