const bcrypt = require("bcryptjs");
const { createSecretToken } = require("../../util/secretToken");
const logger = require("pino")();
const User = require("../../models/user/userModel");

// Credit: @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications and errors are mine and mine alone.

// LOGIN CONTROLLER //
module.exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    //Consider more validation. here. Make the assumption someone is going to try and break your app.
    //I would consider a password policy and email validation (regex) at the very least as requests
    //may not be coming via a form. 
    if (!email || !password) {
      return res.json({
        message: "The email and password fields are required.",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect email." });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password." });
    }
    const token = createSecretToken(user._id);
    user.token = token;
    res.status(201).json({
      message: "User logged in successfully.",
      success: true,
      token: token,
    });
    next();
  } catch (error) {
    logger.error(error);
  }
};
