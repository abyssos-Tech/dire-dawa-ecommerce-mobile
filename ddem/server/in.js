const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URL, {
}).then(() => {
  console.log('Connected to Database');
}).catch((error) => {
  console.error('Database connection error:', error);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
