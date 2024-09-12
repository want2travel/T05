import { Sequelize, DataTypes } from 'sequelize';

// 데이터베이스 연결 설정
const sequelize = new Sequelize('userdata', 'test', '0000', {
  host: 'localhost', //외부 가상머신 호스트로 바꾸기
  port: 3306,
  dialect: 'mysql',
  logging: console.logs
});
// 사용자 모델 정의
const User = sequelize.define('User', {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  median_income: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  household_category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  level_disabled: {
    type: DataTypes.STRING,
    allowNull: true
  },
  spec_group: {
    type: DataTypes.STRING,
    allowNull: false
  },
  family_count: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'users',
  timestamps: false
});

(async () => {
  try {
    // 데이터베이스 연결 테스트
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // 모델을 데이터베이스와 동기화
    await sequelize.sync();
    console.log('User model was synchronized successfully.');

    // // 데이터베이스에서 모든 사용자 조회
    // const users = await User.findAll();
    // users.forEach(user => {
    //   console.log(user.id);
    // });

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

export default User;