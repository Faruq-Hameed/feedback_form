const mongoose = require("mongoose");
// Create schema
const FeedSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    feed: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
// Making a modal on our already
// defined schema
const feedModel = mongoose.model('feed', FeedSchema);

module.exports = feedModel;