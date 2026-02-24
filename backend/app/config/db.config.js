module.exports = {
  // url: "mongodb://localhost:27017/dd_db"
  url: process.env.MONGO_URL || "mongodb://mongo:27017/dd_db"
};
