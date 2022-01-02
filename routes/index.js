import express from "express";
import { getCategories, getCategoryID, saveCategory, updateCategory, deleteCategory } from "../controllers/categoryController.js";
const router = express.Router();

//get all data
router.get('/', getCategories);
//getByID
router.get('/:id', getCategoryID);
//create post
router.post('/', saveCategory);
//updateByID
router.patch('/:id', updateCategory);
//deleteByID
router.delete('/:id', deleteCategory);
export default router;