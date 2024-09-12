import { Sequelize, DataTypes } from 'sequelize';

// 데이터베이스 연결 설정
const sequelize = new Sequelize('social_servicesql', 'test', '0000', {
//데이터베이스 서버.
  host: 'localhost',
  port: 3306,
  dialect: 'mysql'
});

// 사용자 모델 정의
const service = sequelize.define('Service', {
  // id 필드 (TEXT 타입을 기본 키로 사용)
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true, // 기본 키 설정
    unique: true
  },
  service_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  service_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  website: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  phonenum: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  responsibilities: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  responsibility_department: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: 'service',
  timestamps: false
});

//연결 확인 코드(gpt작품)
async function printUserIds() {
  try {
    // 데이터베이스와 연결 확인
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    // 모델을 데이터베이스와 동기화
    await sequelize.sync();
    console.log('Service model was synchronized successfully.');

    const services = await service.findAll();

    // 각 사용자의 id 출력
    services.forEach(service => {
      console.log(service.id); // 또는 user.get('id')
    });

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

printUserIds();


export default service;
