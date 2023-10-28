const { Todo } = require("../model");

module.exports = {
  createTodo: (id, title, description) => {
    return Todo.create(id, title, description);
  },

  findTodo: () => {
    return Todo.findAll();
  },

  findTodoWithId: (id) => {
    return Todo.findByPk(id);
  },

  updateTodo: (id, { title, description }) => {
    return Todo.update({ title, description }, { where: { id } });
  },

  deleteTodo: (id) => {
    return Todo.destroy({ where: { id } });
  },
};
