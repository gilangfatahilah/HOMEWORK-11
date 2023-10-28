const express = require("express");
const router = express.Router();
const { requireJson, errorHandler } = require("../middleware");
const {
  getAllTodo,
  getTodoWithId,
  addNewTodo,
  updateDataTodo,
  deleteDataTodo,
} = require("../controller");

router.get("/todos", getAllTodo);
router.get("/todo/:id", getTodoWithId);
router.post("/todo", requireJson, addNewTodo);
router.put("/todo/:id", requireJson, updateDataTodo);
router.delete("/todo/:id", deleteDataTodo);

// Error Handler
router.use(errorHandler);

module.exports = router;
