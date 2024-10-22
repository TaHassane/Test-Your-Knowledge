const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const auth = require('../middleware/auth');
const prisma = new PrismaClient();

// Saving quiz result
router.post('/results', auth, async (req, res) => {
  try {
    const { score, numberOfQuestions, correctAnswers, wrongAnswers, hintsUsed, fiftyFiftyUsed } = req.body;
    
    const result = await prisma.quizResult.create({
      data: {
        userId: req.user.id,
        score,
        numberOfQuestions,
        correctAnswers,
        wrongAnswers,
        hintsUsed,
        fiftyFiftyUsed
      }
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get user quiz results
router.get('/results', auth, async (req, res) => {
  try {
    const results = await prisma.quizResult.findMany({
      where: {
        userId: req.user.id
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
