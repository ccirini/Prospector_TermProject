const express = require('express'); 
const cors = require('cors');

const app = express(); 

app.use(cors());

// routes
const test_router = require('./router/test.route');

app.use("/", test_router);

module.exports = app; 