const express = require('express');
const router = express.Router();
const profileController = require('../controller/profileController');

router.post('/save-profile', profileController.saveProfile);

module.exports = router;
