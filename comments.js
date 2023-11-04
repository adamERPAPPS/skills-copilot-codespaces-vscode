// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Create a new express app
const app = express();

// Middleware
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// Import routes
const comments = require('./routes/api/comments');

// Use routes
app.use('/api/comments', comments);

// Create port
const port = process.env.PORT || 5000;

// Listen to port
app.listen(port, () => console.log(`Server started on port ${port}`));