const User = require('../models/user');

exports.registerUser = (req, res) => {
  const { username, password, role } = req.body;
  const user = new User({ username, role });

  User.register(user, password, (err) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: err.message });
    }
    res.status(200).json({ message: 'User registered successfully' });
  });
};

