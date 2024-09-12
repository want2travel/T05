import express from 'express';
import bcrypt from 'bcryptjs';
import User from './UserData.js'; //JSON이 데이터베이스에 저장된 걸 sequelize가 sql 쿼리로 변환.
//라우터는 여기서 불러옴.
const router = express.Router();

// 비밀번호 해싱을 위한 salt rounds 설정
const saltRounds = 10;

// 회원가입 라우트
router.post('/signupPage', async (req, res) => {
    
    const { id, password, name, email, age, gender, address, median_income, household_category, level_disabled, spec_group, family_count } = req.body;
    const userDataArray = [
        id,
        password,
        name,
        email,
        age,
        gender,
        address,
        median_income,
        household_category,
        spec_group,
        family_count
      ];
      for (const field of userDataArray) {
        if (!field) {
            return res.status(400).json({ message: `${field} is required.` });
        }
    }
    //여기 아래 행위 자체가 express랑 sql 연결 전제로하는거임.
    try {
        // 사용자 존재 여부 확인
        const user = await User.findOne({ where: { id } });
        if (user) {
            return res.status(400).json({ message: 'Username already exists.' });
        }

        // 비밀번호 해싱
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        
        // 새 사용자 생성
        const newUser = await User.create({
            id,
            password: hashedPassword,
            name,
            email,
            age,
            gender,
            address,
            median_income,
            household_category,
            level_disabled,
            spec_group,
            family_count
          });
        //등록 성공 메시지
        res.status(201).json();
        res.redirect('/loginPage');
    } catch (err) {
        //해시 에러, 사용자 생성 시 에러(통신 등)
        console.error('Error registering user:', err);
        res.status(500).json();
    }
});

export default router;