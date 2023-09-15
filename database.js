const { Sequelize } = require("sequelize")

const sequelize = new Sequelize("pf_21648b", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = { sequelize };

