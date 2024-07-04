const express = require('express');
const questionStore = require('../services/questionStore');
const router = express.Router();

router.get('/', (req, res) => {
    res.json(questionStore.getAllQuestions());
});

module.exports = router;
