require("dotenv").config();

const DBUserName = process.env.DBUserName;
const DBPassword = process.env.DBPassword;
const cluster = process.env.cluster;
const DBName = process.env.DBName;

//make sure you hide this one on source control
module.exports = {
  mongoURI: `mongodb+srv://${DBUserName}:${DBPassword}@${cluster}/${DBName}?retryWrites=true&w=majority`,
};
