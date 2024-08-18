const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const User = require('../models/user');

passport.use(new BasicStrategy(
  async (username, password, done) => {
    try{
        const user = await User.findOne({ username: username }).exec();
     
        if (!user) { 
            return done(null, false); 
        }
        user.authenticate(password, (err, user) => {
            if (err) { 
                return done(err); 
            }
            if (!user) { 
                return done(null, false); 
            }
            return done(null, user);
        });
    
    } 
    catch (err){
        return done(err);
    }
  }
));

module.exports = passport;
