const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.PSQL_HOST || "localhost",
    port: process.env.DB_PORT,
    dialect: "postgres",
  }
);

try {
  sequelize.authenticate();
  console.log("Database authentication Success!");
} catch (error) {
  console.log("Something went wrong!");
}

module.exports = { sequelize };
