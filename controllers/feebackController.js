const feedbackData=require('../data/feedbackData')
const FeedbackModel=require('../models/FeedbackModel')
const addFeedback = async (req, res) => {
    try {
      for (const feedback of feedbackData) {
        const newFeedback = new FeedbackModel(feedback);
        await newFeedback.save();
      }
      console.log("Data saved successfully");
      res.sendStatus(200);
    } catch (error) {
      console.error("Error saving data:", error);
      res.sendStatus(500);
    }
  };

 const getFeedback=async (req, res) => {
    try {
      const feedbacks = await FeedbackModel.find();
      res.json(feedbacks);
    } catch (error) {
        console.error("Error retrieving data:", error);
        res.sendStatus(500);
    }
  };

  const updateFeedData = async (req, res) => {
    try {
      const { newData } = req.body;
      const { _id } = newData;
  
      const updatedData = await FeedbackModel.findByIdAndUpdate(_id, newData, {
        new: true,
      });
  
      if (!updatedData) {
        return res.status(404).json({ message: "Feedback data not found" });
      }
  
      res.json(updatedData);
    } catch (error) {
      console.error("Error updating data:", error);
      res.sendStatus(500);
    }
  };
  module.exports={addFeedback, getFeedback, updateFeedData}