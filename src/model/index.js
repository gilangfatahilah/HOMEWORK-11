const { DataTypes } = require("sequelize");
const { sequelize } = require("../config");

module.exports = {
  Todo: sequelize.define(
    "Todo",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
    },
    {
      tableName: "todo",
      freezeTableName: true,
      timestamps: false,
    }
  ),
};
