const mongoose = require("mongoose");
// Database Connection
module.exports = async () => {
  mongoose
    .connect(process.env.MONGODB_URL, { useUnifiedTopology: true })
    .then(() => {
      console.log("connect to db successfully");
    })
    .catch((err) => {
      console.error("Failed to connect to db because of error" + err.message);
    });
};
