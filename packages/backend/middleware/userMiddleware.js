require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/user/userModel");

// Credit: @ https://medium.com/@furqanistic/decoding-jwt-secure-authentication-in-mern-applications-23cd7141e2f
// Any further modifications are mine and mine alone.

//You're using a single token method for user authentication. I would consider using a refresh token as well. 

/**
 * The way the refresh token would work is the user is sent the standard JWT token (with a short expiration time - say 15 minutes).
 * 
 * The user is also sent a httpOnly cookie with a refresh token (with a longer expiration time - say 1 day).
 * 
 * If the user makes a request with an expired JWT, before signing out in the client, they have the option to send a request to a refresh
 * endpoint that would check the refresh token validity and if valid, send a new JWT token.
 * 
 * This means if a users standard JWT is compromised it will only be valid for 15 minutes. - Mitigating the level of compromise. 
 */

module.exports.userVerification = (req, res) => {
  const token = req.body.headers["Authorization"];
  if (!token) {
    return res.json({ status: false });
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    } else {
      getUserName(res, data);
    }
  });
};

async function getUserName(res, data) {
  const user = await User.findById(data.id);
  if (user) return res.json({ status: true, user: user.username });
  else return res.json({ status: false });
}
