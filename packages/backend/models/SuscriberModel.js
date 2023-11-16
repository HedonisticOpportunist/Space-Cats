const mongoose = require("mongoose");

// Credit @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications are mine and mine alone.
const suscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    match: [/.+\@.+\..+/, "Your email address should be valid."],
    unique: [true, "Your email address should be unique."],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("Suscriber", suscriberSchema);
