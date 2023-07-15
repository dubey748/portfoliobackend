const projectData=require('../data/projectData')
const ProjectModel=require('../models/ProjectModel')
const addProject = async (req, res) => {
    try {
      for (const project of projectData) {
        const newProject = new ProjectModel(project);
        await newProject.save();
      }
      console.log("Project saved successfully");
      res.sendStatus(200);
    } catch (error) {
      console.error("Error saving data:", error);
      res.sendStatus(500);
    }
  };

 const getProject=async (req, res) => {
    try {
      const project = await ProjectModel.find();
      res.json(project);
    } catch (error) {
        console.error("Error retrieving data:", error);
        res.sendStatus(500);
    }
  };

  const updateProjectData = async (req, res) => {
    try {
      const newDataArray = req.body;
  
      const promises = newDataArray.map(async (newData) => {
        const { _id } = newData;
        const updatedProject = await ProjectModel.findByIdAndUpdate(_id, newData, { new: true });
  
        if (!updatedProject) {
          return res.status(404).json({ message: "Project data not found" });
        }
  
        return updatedProject;
      });
  
      const updatedProjects = await Promise.all(promises);
      res.json(updatedProjects);
    } catch (error) {
      console.error("Error updating data:", error);
      res.sendStatus(500);
    }
  };
  
  module.exports={addProject, getProject, updateProjectData}