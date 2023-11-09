const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../util/db");

const User = sequelize.define("sec_user", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  full_name: {
    type: DataTypes.STRING(115),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
}, {
    constructor(nome_completo, email, password) {
        this.nome_completo = nome_completo;
        this.email = email,
        this.password = password
    }
});

module.exports = User;
