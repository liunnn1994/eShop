exports.config = {
  // 保存密码时的加密密钥
  secret: "e3991f4f-b275-47a2-8b06-4a8e32f75901",
  // 新建管理员的默认账号密码
  adminAccount: {
    username: "admin",
    password: "123456",
  },
  // 数据库配置
  db: {
    dbName: "carManagementSystem",
    username: "root",
    password: "Aa123456",
    dbConfig: {
      host: "localhost",
      dialect: "mysql",
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
    },
    timezone: "+08:00",
  },
  company: {
    name: "公司名称",
    address: "公司地址",
    phones: ["门店电话"],
  },
};
