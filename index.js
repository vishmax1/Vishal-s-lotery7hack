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