const app = require("../index");
const request = require("supertest");

describe("GET /todos", () => {
  const newTodo = {
    id: Math.floor(Math.random() * 100 + 1),
    title: "cleaning up the rooms",
    description: "cleaning up the rooms in the morning",
  };
  beforeAll(async () => {
    // set up the todo
    await request(app).post("/todo").send(newTodo);
  });
  afterAll(async () => {
    await request(app).delete(`/todo/${newTodo.id}`);
  });

  it("should return 200 as a response status code", async () => {
    const response = await request(app).get("/todos");
    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toContain("application/json");
  });

  it("should return todos", async () => {
    const response = await request(app).get("/todos");
    expect(response.body.length >= 1).toBe(true);
  });

  it("should return todo by id", async () => {
    const response = await request(app).get("/todo/1");
    expect(response.statusCode).toBe(200);
    expect(response.body.id).toBe(1);
  });
});

describe("POST /todo", () => {
  const newTodo = {
    id: Math.floor(Math.random() * 100 + 1),
    title: "washing the dishes",
    description: "wash the dish in the morning",
  };

  afterAll(async () => {
    await request(app).delete(`/todo/${newTodo.id}`);
  });

  it("should create new data and return success status", async () => {
    const response = await request(app).post("/todo").send(newTodo);
    console.log(response);
    expect(response.statusCode).toBe(201);
    expect(response.body.status).toBe("success");
    expect(response.body.id == newTodo.id).toBe(true);
  });
});

describe("PUT /todo/:id", () => {
  const newTodo = {
    id: Math.floor(Math.random() * 100 + 1),
    title: "washing dishes",
    description: "wash the dish in the morning",
  };
  beforeAll(async () => {
    await request(app).post("/todo").send(newTodo);
  });
  afterAll(async () => {
    await request(app).delete(`/todo/${newTodo.id}`);
  });
  it("should update item if it exists", async () => {
    const response = await request(app).put(`/todo/${newTodo.id}`).send({
      title: "washing the dish",
      description: "wash the dish in the morning",
    });
    expect(response.statusCode).toBe(201);
    expect(response.body.status).toBe("success");
    expect(response.body.id == newTodo.id).toBe(true);
  });
});

describe("DELETE /todo/:id", () => {
  const newTodo = {
    id: Math.floor(Math.random() * 100 + 1),
    title: "washing dishes",
    description: "wash the dish in the morning",
  };
  beforeAll(async () => {
    await request(app).post("/todo").send(newTodo);
  });
  it("should delete one item", async () => {
    const response = await request(app).delete(`/todo/${newTodo.id}`);
    const findItem = await request(app).get(`/todo/${newTodo.id}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("success");
    expect(response.body.id == newTodo.id).toBe(true);
    // Check if items are deleted
    expect(findItem.statusCode).toBe(404);
    expect(findItem.body.success).toBe(false);
  });
});
