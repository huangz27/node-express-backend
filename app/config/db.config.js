module.exports = {
    HOST: "anycompany-mysql-db.cnkwfc83b9kn.ap-southeast-1.rds.amazonaws.com",
    USER: "MyName",
    PASSWORD: "MyPassword",
    DB: "testdb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };