const express = require('express');
const paperGenerator = require('../services/paperGenerator');
const router = express.Router();

router.post('/', (req, res) => {
    const { totalMarks, difficultyDistribution } = req.body;

    // Validate input
    if (typeof totalMarks !== 'number' || !difficultyDistribution) {
        return res.status(400).json({ error: 'Invalid input. Please provide totalMarks and difficultyDistribution.' });
    }

    const paper = paperGenerator.generate(totalMarks, difficultyDistribution);
    res.json(paper);
});

module.exports = router;
