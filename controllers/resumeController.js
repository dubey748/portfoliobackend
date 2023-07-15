const ResumeModel = require("../models/ResumeModel");
const resumeData = require("../data/resumeData");
const addData = async (req, res) => {
  try {
    const newData = new ResumeModel(resumeData);

    await newData.save();
    console.log("Data saved successfully");
    res.sendStatus(200);
  } catch (error) {
    console.error("Error saving data:", error);
    res.sendStatus(500);
  }
};

const getData = async (req, res) => {
  try {
    const resumeData = await ResumeModel.find();
    res.json(resumeData);
  } catch (error) {
    console.error("Error retrieving data:", error);
    res.sendStatus(500);
  }
};

const updateData = async (req, res) => {
  try {
    const { newData } = req.body;
    const { _id } = newData;

    const updatedData = await ResumeModel.findByIdAndUpdate(_id, newData, {
      new: true,
    });

    if (!updatedData) {
      return res.status(404).json({ message: "Resume data not found" });
    }

    res.json(updatedData);
  } catch (error) {
    console.error("Error updating data:", error);
    res.sendStatus(500);
  }
};
module.exports = { addData, getData, updateData };
