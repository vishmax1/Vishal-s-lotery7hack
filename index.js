const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const resultRoutes = require('./routes/results');

app.use(cors());
app.use('/api', resultRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

const { fetchLatestResult } = require('./services/scraper');
app.get('/api/scrape', async (req, res) => {
  try {
    const result = await fetchLatestResult();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Scraping failed', details: error.message });
  }
});
