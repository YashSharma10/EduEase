// routes/quizRoutes.js
const express = require('express');
const router = express.Router();
const quizController = require('../controller/quizController');

router.get('/get-recent-activity', quizController.getRecentQuizData);
router.post('/store-quiz-results', quizController.storeQuizResults);

module.exports = router;
