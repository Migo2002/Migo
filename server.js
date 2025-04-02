const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

const app = express();

// Serve static files from the React app
app.use(serveStatic(path.join(__dirname, 'build')));

// Parse JSON bodies
app.use(express.json());

// Example API endpoints
app.get('/api/products', (req, res) => {
  // Sample data - this would typically come from a database
  res.json([
    { id: 1, name: 'VINTAGE LEATHER JACKET', seller: 'RETRO THREADS VINTAGE', price: 149.99, quantity: 1 },
    { id: 2, name: 'ANTIQUE RECORD PLAYER', seller: 'VINYL CLASSICS', price: 299.99, quantity: 1 },
    { id: 3, name: 'LEATHER COMBAT BOOTS', seller: 'RETRO FOOTWEAR', price: 129.99, quantity: 1 },
    { id: 4, name: 'DENIM JACKET', seller: 'BLUE COLLAR VINTAGE', price: 89.99, quantity: 1 }
  ]);
});

app.get('/api/orders', (req, res) => {
  // Sample data
  res.json([
    { id: '12345', name: 'VINTAGE LEATHER JACKET', status: 'Shipping', date: '2025-03-20' },
    { id: '12344', name: 'ANTIQUE RECORD PLAYER', status: 'Delivered', date: '2025-03-15' }
  ]);
});

// The "catchall" handler for any request that doesn't match one above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Server is listening on port ${port}`);