import express from 'express'
import { register , login , getProfile } from '../controllers/auth.controller.js'
import {isAuthenticated} from "../middleware/auth.middleware.js"
import { addBook } from '../controllers/book.controller.js';

const router = express.Router()
router.post('/register',register);
router.post('/login', login)
router.get('/profile', isAuthenticated,getProfile);
router.post('./add', addBook)

export default router   