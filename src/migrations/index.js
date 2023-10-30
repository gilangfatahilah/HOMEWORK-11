const { sequelize } = require("../config");
const { Todo } = require("../model");
const { seedTodos } = require("../seeders");

function syncTable() {
  return Promise.all([Todo.sync()]);
}

function seedData() {
  return Promise.all([seedTodos()]);
}

const migrateDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected!");

    await syncTable();
    await seedData();

    console.log("Database migrated!");
  } catch (error) {
    console.error("Database connection failed:", error.message);
  }
};

migrateDatabase();
