import express, { Express } from "express";
const router = express.Router();
import { addTodo, removeTodo, updateTodo, getTodo } from '../controllers/todo'

router.get('/list', getTodo);
router.post('/new', addTodo);
router.patch('/update', updateTodo);
router.delete('/delete', removeTodo);

export default router;