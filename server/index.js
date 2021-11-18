const express = require('express');
const cors = require('cors');

const pool = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

app.post("/todos", async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES ($1)",
            [description]
        );

        res.json(newTodo.rows[0]);

    } catch(e) {
        console.log(e.message);
    }
})

app.get("/todos", async (req, res) => {
    try {
        const todos = await pool.query("SELECT * FROM todo");

        res.json(todos.rows);
    } catch(e) {
        console.log(e.message);
    }
})

app.get("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE id = $1", [id]);

        res.json(todo.rows[0]);
    } catch(e) {
        console.log(e.message);
    }
})

app.put("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateTodo = await pool.query(
            "UPDATE todo SET description = $1 WHERE id = $2",
            [description, id]
        );

        res.json("Todo Updated");
    } catch(e) {
        console.log(e.message);
    }
})

app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query("DELETE FROM todo WHERE id = $1", [id]);

        res.json("Todo Deleted");
    } catch(e) {
        console.log(e.message);
    }
})

app.listen(5000, () => {
    console.log('listening on 5000');
});    