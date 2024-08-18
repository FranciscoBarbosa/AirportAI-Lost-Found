const User = require('../models/user');
const passport = require('../config/passport');


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

exports.authenticateUser = (req, res, next) => {
  passport.authenticate('basic', {session: false}, (err, user) => {
    if(err){
      return next(err);
    }
    if(!user){
      return res.status(401).json({ error: 'User credentials are not correct' });
    }
    req.user = user;
    return res.status(200).send('This is a protected route');
  })(req, res, next);

}