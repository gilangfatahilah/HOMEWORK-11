const { Todo } = require("../model");

module.exports = {
  seedTodos: async () => {
    try {
      await Todo.bulkCreate([
        {
          id: 1,
          title: "Do Homework",
          description: "Do My Homework Before October, 29",
        },
        {
          id: 2,
          title: "Complete Summary",
          description: "Make Summary About My Study!",
        },
        {
          id: 3,
          title: "Attend Meetings",
          description: "Attend Meetings with clients",
        },
        {
          id: 4,
          title: "Go to Anna birthday",
          description: "went to attend anna's birthday party",
        },
        {
          id: 5,
          title: "Go to veterinarian",
          description: "Brings my cat into veterinarian",
        },
      ]);

      console.log("Data seedings successfully inserted!");
    } catch (error) {
      console.error("data sedding error:", error.message);
    }
  },
};
