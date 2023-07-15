const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  designation: { type: String, required: true },
  company: { type: String, required: true },
  description: { type: String, required: true },
  social: {
    linkedin: { type: String },
    instagram: { type: String }
  }
});

const FeedbackModel= mongoose.model('Feedback', feedbackSchema);

module.exports = FeedbackModel;
