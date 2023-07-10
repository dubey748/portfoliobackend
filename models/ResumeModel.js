// models/ResumeModel.js
const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  degree: {
    type: String,
    required: true
  },
  university: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  }
});

const experienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  startDate: {
    type: String,
    required: true
  },
  endDate: {
    type: String,
    default: null
  },
  description: {
    type: String,
    required: true
  }
});

const resumeSchema = new mongoose.Schema({
  personalInfo: {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    }
  },
  summary: {
    type: String,
    required: true
  },
  education: {
    type: [educationSchema],
    required: true
  },
  experience: {
    type: [experienceSchema],
    required: true
  },
  skills: {
    type: [String],
    required: true
  },
  languages: {
    type: [String],
    required: true
  }
});

const ResumeModel = mongoose.model('Resume', resumeSchema);

module.exports = ResumeModel;
