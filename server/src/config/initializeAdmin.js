require('dotenv').config()
const User = require('../models/user');

const initializeAdmin = async () => {
  const userCount = await User.countDocuments({});
  if (userCount === 0) {
    await insertUser();
  }
};

const insertUser = async () => {
    const adminUser = new User({
        username: process.env.ADMIN_USER,
        role: 'admin'
      });

      return new Promise((resolve, reject) => {
        User.register(adminUser, process.env.ADMIN_PASS, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });
};


initializeAdmin();