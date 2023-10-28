const {
  getAll,
  getTodoById,
  addNewTodo,
  updateTodo,
  deleteTodo,
} = require("../service");

module.exports = {
  getAllTodo: async (req, res, next) => {
    try {
      const result = await getAll();
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },

  getTodoWithId: async (req, res, next) => {
    const id = req.params.id;

    try {
      const result = await getTodoById(id);
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },

  addNewTodo: async (req, res, next) => {
    const { id, title, description } = req.body;

    try {
      const result = await addNewTodo(id, title, description);
      return res.status(201).json({
        status: "success",
        message: "Todo added successfully",
        id: result.id,
      });
    } catch (error) {
      next(error);
    }
  },

  updateDataTodo: async (req, res, next) => {
    const id = req.params.id;
    const { title, description } = req.body;

    try {
      const result = await updateTodo(id, { title, description });
      res.status(201).json({
        status: "success",
        message: "Todo updated successfully",
        id: id,
      });
    } catch (error) {
      next(error);
    }
  },

  deleteDataTodo: async (req, res, next) => {
    const id = req.params.id;

    try {
      const result = await deleteTodo(id);
      res.status(200).json({
        status: "success",
        message: "Todo deleted successfully",
        id: id,
      });
    } catch (error) {
      next(error);
    }
  },
};
