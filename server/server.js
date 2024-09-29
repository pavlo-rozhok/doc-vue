// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const app = express();

// Use process.env to access environment variables
const port = process.env.PORT || 3000;
const apiKey = process.env.API_KEY;

// Example route
app.get('/', (req, res) => {
  res.send(`API Key: ${apiKey}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
