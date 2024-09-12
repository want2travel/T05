import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import passport from './passport.js'; // passport 설정 파일
import registerRoute from './register.js';
import cors from 'cors'; // CORS 미들웨어 추가
import os from 'os';
import expressFlash from 'express-flash';
import User from './UserData.js';
const app = express();
app.use(expressFlash()); // flash 메시지 미들웨어 추가
app.use(express.json());
//환경변수 포트
const port = process.env.PORT || 8080;
//express 설정
app.use(cors()); // 모든 출처 허용 (운영 환경에서는 출처를 제한하는 것이 좋습니다)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  //Express 애플리케이션에서 세션 미들웨어를 설정
  //누군가 세션 ID를 가로채거나 조작할 수 있다면, 다른 사용자의 세션에 접근할 수 있게 되어 심각한 보안 문제가 발생할 수 있습니다.
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
//passport의 세션 미들웨어를 설정
app.use(passport.session());

// 회원가입 라우트
app.use('/api', registerRoute);

// 로그인 라우트
app.post('/loginPage', passport.authenticate('local', {
  successRedirect: '/profilePage',
  failureRedirect: '/loginPage',
  failureFlash: true
}));

// 프로필 라우트
app.get('/profilePage', (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ message: 'Welcofme to your profile!', user: req.user });
  } else {
    //서버가 인증 여부를 확인한 후, 인증되지 않은 경우 401 응답을 보냅니다.
    res.status(401).json({ message: 'Not authenticated' });
  }
});

//수급자 기준 급여정보
app.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;

    console.log('---수급자선정 중 소득인정액에 따른 급여 수령 가능 여부---');
    //사용 계정에 해당하는 회원의 레코드 뽑기
    const record = await User.findOne({
      where: { id: id } // Correctly use 'where' clause
    });
    //가구원 수
    const n = record.family_count;
    //n인 가구 -> 기준중위소득
    let standard = [2228445, 3682609, 4714657, 5729913, 6695735, 7618369, 8514994];
    const income = record.median_income;
    if (income <= standard[n-1]*0.5 && income > standard[n-1]*0.48){        
      res.send({message: '교육급여를 받으실 수 있습니다.'});
    } else if (income <= standard[n-1]*0.48 && income > standard[n-1]*0.4){
      res.send({message: '주거급여, 교육급여를 받으실 수 있습니다.'});
    } else if (income <= standard[n-1]*0.4 && income > standard[n-1]*0.32){
      res.send({message: '의료급여, 주거급여, 교육급여를 받으실 수 있습니다.'});
    } else if(income <= standard[n-1]*0.32){
      res.send({message: '생계급여, 의료급여, 주거급여, 교육급여를 받으실 수 있습니다.'});
    } else {
      res.send('기초생활수급자 조건에 해당하지 않습니다.');
    }
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
})

// 로그아웃 라우트
app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/loginPage');
});

// 서버가 실행 중인 IP 주소를 가져오는 함수
const getLocalIPs = () => {
  const ifaces = os.networkInterfaces();
  const ips = [];
  for (const iface in ifaces) {
    ifaces[iface].forEach((details) => {
      if (details.family === 'IPv4' && !details.internal) {
        ips.push(details.address);
      }
    });
  }
  return ips;
};

// 서버 실행
app.listen(port, '0.0.0.0', () => { // '0.0.0.0'을 사용하여 외부 IP에서도 접근 가능하도록 설정
  console.log(`Server is running on http://${getLocalIPs()[0]}:${port}`);
});
