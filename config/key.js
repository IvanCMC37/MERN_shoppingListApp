//make sure you hide this one on source control
module.exports = {
  mongoURI: `mongodb+srv://${process.env.userName}:${process.env.password}@cluster0.sbto5.mongodb.net/${DBName}?retryWrites=true&w=majority`,
};
