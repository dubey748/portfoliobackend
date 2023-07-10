const express = require('express');
const connectDB = require('./Connection');
const { addData, getData } = require('./controllers/resumeController');

const app = express();
const port = 3000;

// Connect to MongoDB
app.use(express.json());
connectDB();
// Add data to the database
app.post('/data', addData);
app.get('/resume', getData);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

