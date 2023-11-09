const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("postgres", "postgres", "Senha123", {
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
