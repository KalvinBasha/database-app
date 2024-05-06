const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  database: "postgres",
  username: "postgres.zezlbythneurwyctdeqz",
  password: "89qwAa4)in)@*2c",
  host: "aws-0-eu-west-2.pooler.supabase.com",
  port: "5432",
});

module.exports = sequelize;
