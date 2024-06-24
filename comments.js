// Create web server with Express
// Import express
const express = require('express');
// Create express app
const app = express();
// Import data
const comments = require('./data/comments');
// Import body-parser
const bodyParser = require('body-parser');
// Use body-parser
app.use(bodyParser.json());
// Import cors
const cors = require('cors');
// Use cors
app.use(cors());
// Import data
const products = require('./data/products');

