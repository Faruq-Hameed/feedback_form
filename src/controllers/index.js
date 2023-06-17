const {feedModel} = require('../db');

// Handling get request
const getForm = (req, res) => {
  // Rendering your form
  res.render("feedback_form");
};

// Handling data after submission of form
const submitFeedBack = async (req, res) => {
  try {
    const feedData = new feedModel({
      name: req.body.name,
      email: req.body.email,
      feed: req.body.feedback,
    });
    feedData.save().then((data) => {
      res.render("feedback_form", { msg: "Your feedback successfully saved." });
    });
  } catch (err) {
    res.render("feedback_form", { msg: "Check Details." });
  } 
};

module.exports = {getForm,submitFeedBack};