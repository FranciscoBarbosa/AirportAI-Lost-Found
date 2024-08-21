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

exports.findUsers = async (req, res) => {
  try{
    const users = await User.find();
    res.status(200).json({ message: users });
  }
  catch(error){
    res.status(500).json({ message: 'Error finding users', error });
}
  
};

