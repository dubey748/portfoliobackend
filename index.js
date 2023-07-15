const express = require('express');
const cors = require('cors');
const connectDB = require('./Connection');
const { addData, getData, updateData } = require('./controllers/resumeController');
const {addFeedback, getFeedback, updateFeedData}=require('./controllers/feebackController')
const {addProject, getProject, updateProjectData} =require('./controllers/projectController')

const app = express();
app.use(cors());
const port = 3000;


// Connect to MongoDB
app.use(express.json());
connectDB();
// Add data to the database
app.post('/data', addData);
app.post('/feed',addFeedback)
app.post('/add-project', addProject)

app.get('/resume', getData);
app.get('/showfeed', getFeedback)
app.get('/projects',getProject)

app.put('/update-resume', updateData);
app.put('/update-feed',updateFeedData)
app.put('/update-projects', updateProjectData)

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

