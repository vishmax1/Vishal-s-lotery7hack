// Sample logic - replace with real scraping later

let history = [];
let correctPredictions = 0;
let totalPredictions = 0;

function getRandomResult() {
    const number = Math.floor(Math.random() * 10);
    return {
        period: Date.now(),
        number,
        bigSmall: number >= 5 ? "Big" : "Small",
        color: getColor(number)
    };
}

function getColor(num) {
    if ([0, 5].includes(num)) return "Violet";
    if ([1, 3, 7, 9].includes(num)) return "Red";
    if ([2, 4, 6, 8].includes(num)) return "Green";
    return "Unknown";
}

async function getLatestResult() {
    const result = getRandomResult();
    history.push(result);
    if (history.length > 200) history.shift();
    return result;
}

async function getPrediction() {
    const next = getRandomResult();
    totalPredictions++;
    // pretend it's always correct for now
    correctPredictions++;
    return next;
}

async function getAccuracy() {
    return {
        correct: correctPredictions,
        total: totalPredictions,
        accuracy: totalPredictions === 0 ? 0 : Math.round((correctPredictions / totalPredictions) * 100)
    };
}

async function getHistory() {
    return history;
}

module.exports = { getLatestResult, getPrediction, getAccuracy, getHistory };