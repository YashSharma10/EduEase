// controllers/quizController.js
const QuizResult = require('../models/quizResult');

exports.storeQuizResults = async (req, res) => {
  try {
    const { score, totalQuestions, correctAnswers, wrongAnswers } = req.body;

    const quizResult = new QuizResult({
      score,
      totalQuestions,
      correctAnswers,
      wrongAnswers,
    });

    await quizResult.save();
    res.status(201).json({ message: 'Quiz results stored successfully', quizResult });
  } catch (error) {
    console.error('Error storing quiz results:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
