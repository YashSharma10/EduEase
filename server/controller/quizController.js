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

exports.getRecentQuizData = async (req, res) => {
  try {
    console.log("Fetching recent quiz data...");
    // Fetch the 10 most recent quiz results, sorted by creation date (newest first)
    const quizResults = await QuizResult.find()
      .sort({ createdAt: -1 })
      .limit(10);
    
    console.log("Recent quiz data:", quizResults);
    res.json(quizResults);
  } catch (error) {
    console.error('Error fetching quiz data:', error);
    res.status(500).json({ error: 'Failed to fetch quiz data' });
  }
};