const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

const app = express();

// Serve static files from the React app
app.use(serveStatic(path.join(__dirname, 'build')));

// The "catchall" handler for any request that doesn't match one above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Server is listening on port ${port}`);