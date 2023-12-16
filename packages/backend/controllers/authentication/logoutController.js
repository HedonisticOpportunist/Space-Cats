const logger = require("pino")();

// @Credit: https://blog.reactplay.io/persistent-log-in-using-cookies-in-react
// Any errors are mine and mine alone

// LOGOUT CONTROLLER //
module.exports.logout = async (_req, res, next) => {
  try {
    //You're clearing the token from the cookie? You're not using cookies
    res.clearCookie("token");
    res
      .status(201)
      .json({ message: "User logged out successfully.", success: true });
    next();
  } catch (error) {
    logger.error(error);
  }
};
