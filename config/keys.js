require("dotenv").config();
const host = process.env.MONGO_HOST;
const port = process.env.MONGO_PORT;
const name = process.env.MONGO_DB;

module.exports = {
  mongoURI: `mongodb://${host}:${port}/${name}`
};
