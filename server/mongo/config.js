const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://LGM_01:Usuario1@cluster0.5ehav.mongodb.net/fogata",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
); // connect to our database

// db.on('error', console.error.bind(console, 'connection error:'));
const db = mongoose.connection;
db.once("open", () => console.info("Connected to MongoDB Sample"));
db.on("error", console.error.bind(console, "connection error:"));

module.exports = mongoose;
