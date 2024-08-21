const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const User = require('../../src/models/user')
let mongoServer;

const connect = async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  console.log("connecting to " + uri);
  await mongoose.connect(uri);

  const adminUser = {
    username: 'admin',
    password: 'pass',
    role: 'admin'
  };
  
  const user = new User(adminUser);
  await user.save();
};

const close = async () => {
  await mongoose.disconnect();
  if (mongoServer) {
    await mongoServer.stop();
  }
};

module.exports = { connect, close};