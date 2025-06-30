const express = require('express');
const router = express.Router();
const { getLatestResult, getPrediction, getAccuracy, getHistory } = require('../services/wingoService');

router.get('/latest', async (req, res) => {
    const result = await getLatestResult();
    res.json(result);
});

router.get('/predict', async (req, res) => {
    const prediction = await getPrediction();
    res.json(prediction);
});

router.get('/accuracy', async (req, res) => {
    const accuracy = await getAccuracy();
    res.json(accuracy);
});

router.get('/history', async (req, res) => {
    const history = await getHistory();
    res.json(history);
});

module.exports = router;