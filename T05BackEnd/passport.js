import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import User from './UserData.js';

passport.use(new LocalStrategy(
    {
      usernameField: 'id',
      passwordField: 'password'
    },
    async (id, password, done) => {
      try {
        console.log(`Attempting to authenticate user: ${id}`);
        
        // 존재하는 사용자 아이디 찾기
        const user = await User.findOne({ where: { id: id } });
  
        if (!user) {
          console.log('User not found');
          return done(null, false, { message: 'User not found' }); 
        }
  
        // 비밀번호 비교 (단순 비교)
        if (user.password !== password) {
          console.log('Password does not match');
          return done(null, false, { message: 'Incorrect password' }); 
        }
  
        // 인증 성공
        console.log('User authenticated successfully');
        return done(null, user);
      } catch (err) {
        console.error('Error during authentication:', err);
        return done(err);
      }
    }
  ));
  
  passport.serializeUser((user, done) => {
    try {
      done(null, user.id);
    } catch (err) {
      console.error('Error during serialization:', err);
      done(err);
    }
  });
  
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({ where: { id: id } });
      done(null, user);
    } catch (err) {
      console.error('Error during deserialization:', err);
      done(err);
    }
  });
  

export default passport;
