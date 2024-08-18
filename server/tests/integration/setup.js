const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');

var mongoServer;

const connect = async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  console.log("connecting to " + uri);
  await mongoose.connect(uri);
};

const close = async () => {
  await mongoose.disconnect();
  if (mongoServer) {
    await mongoServer.stop();
  }
};

module.exports = { connect, close };