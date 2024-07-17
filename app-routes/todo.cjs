const express = require("express");
const router = express.Router();
const { addTodo, removeTodo, updateTodo, getTodo } = require('../controllers/todo.cjs')

router.get("/list", getTodo);
router.post('/new',addTodo)
router.patch("/update", updateTodo);
router.delete("/delete", removeTodo);

module.exports = router;