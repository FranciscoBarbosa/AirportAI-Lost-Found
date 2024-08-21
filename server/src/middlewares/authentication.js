const passport = require('../config/passport');

exports.authenticateUser = (req, res, next) => {
    passport.authenticate('basic', {session: false}, (err, user) => {
      if(err){
        return next(err);
      }
      if(!user){
        return res.status(401).json({ error: 'User credentials are not correct' });
      }
      req.user = user;
      return next();
    })(req, res, next);
  
  }