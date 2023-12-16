//Do you need an app.js AND index.js? I would merge them into a single module.js
const app = require("./app");
const logger = require("pino")();
//I like that port is in an env. 
require("dotenv").config();
const { PORT } = process.env;

// LISTEN FUNCTION
app.listen(PORT, () => {
  logger.info(`Server is listening on port ${PORT}`);
});
