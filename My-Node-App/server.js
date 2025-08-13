const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static HTML from views folder
app.use(express.static(path.join(__dirname, 'views')));

// Simple API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Node.js API!' });
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
