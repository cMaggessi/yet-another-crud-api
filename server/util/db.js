const { Sequelize } = require("sequelize");
require('dotenv').config()

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
  define: {
    freezeTableName: true,
  },
});

async function validateCon() {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados estabelecida!");
  } catch (error) {
    console.error("ERRO AO CONECTAR AO BANCO DE DADOS: ", error);
  }
}

validateCon();

(module.exports = sequelize), validateCon;
