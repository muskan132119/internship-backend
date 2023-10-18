const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

const app = express();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

// Serve your JSON data
app.use('/api', middlewares, router);

// Serve your React app (assuming it's in the 'build' directory)
app.use(express.static(path.join(__dirname, 'dist')));

// Start the server
const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});