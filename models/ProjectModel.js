const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    thumbnailUrl: {
      type: String,
      required: true,
    },
    projectLink: {
      type: String,
      required: true,
    },
  });

  const ProjectModel= mongoose.model('Project', projectSchema);

module.exports = ProjectModel;