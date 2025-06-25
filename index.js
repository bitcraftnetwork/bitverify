const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Simple route
app.get('/', (req, res) => {
  res.send('License API is running!');
});

// License generation route
app.get('/v2/license/generate', (req, res) => {
  const license = 'LIC-' + Math.random().toString(36).substring(2, 10).toUpperCase();
  res.json({
    status: 'success',
    license: license
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
