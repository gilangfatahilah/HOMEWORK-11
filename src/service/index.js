const {
  findTodo,
  findTodoWithId,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../repositories");

module.exports = {
  getAll: async () => {
    const result = await findTodo();
    return result;
  },

  getTodoById: async (id) => {
    const result = await findTodoWithId(id);

    if (result === null) {
      const error = new Error(`Todo with id : ${id} does not exist`);
      error.status = 404;
      throw error;
    } else {
      return result;
    }
  },

  addNewTodo: async (id, title, description) => {
    const isIdAvailable = await findTodoWithId(id);
    if (!id || !title || !description) {
      const error = new Error("Bad Request!");
      error.status = 400;
      throw error;
    } else if (isIdAvailable) {
      const error2 = new Error(`Sorry, todo with id : ${id} already exist!`);
      error2.status = 400;
      throw error2;
    }

    const result = await createTodo({
      id: id,
      title: title,
      description: description,
    });
    result.id = id;
    return result;
  },

  updateTodo: async (id, { title, description }) => {
    const isIdAvailable = await findTodoWithId(id);
    if (!title || !description) {
      const error = new Error("Bad Request!");
      error.status = 400;
      throw error;
    } else if (!isIdAvailable) {
      const error2 = new Error(`Sorry, we couldn't find todo with id ${id}`);
      error2.status = 404;
      throw error2;
    }
    const result = await updateTodo(id, { title, description });
    return result;
  },

  deleteTodo: async (id) => {
    const isIdAvailable = await findTodoWithId(id);

    if (!isIdAvailable) {
      const error = new Error(`Sorry, we couldn't find todo with id ${id}`);
      error.status = 404;
      throw error;
    }

    const result = await deleteTodo(id);
    return result;
  },
};
