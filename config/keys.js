require("dotenv").config();
const host = process.env.HOST;
const port = process.env.PORT;
const name = process.env.DB;

module.exports = {
  mongoURI: `mongodb://${host}:${port}/${name}`
};
