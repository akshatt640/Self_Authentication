import express from "express";
import { addBook, deleteBook, getAllBooks, updateBook } from "../controllers/book.controller.js";

const router = express.Router();
console.log("Book ROuter Loaded")
router.post("/add", addBook);
router.get('/',getAllBooks);
router.put('/update/:id',updateBook)
router.delete('/delete/:id',deleteBook)
export default router;