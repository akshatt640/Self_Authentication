import express from "express"
import {connectDB} from './config/db.js'
import authRouter from './routers/auth.route.js' 
import cors from 'cors'
import bookRouter from './routers/book.route.js'
const app = express()

//dono server connect karane ke liye 
app.use(cors({
    origin:'http://localhost:5173',
    credentials: true,
}))
// middleware
app.use(express.json())

// router connect keya gaya hai 
app.use('/api/v1/auth',authRouter)
app.use('/api/books',bookRouter)

// database connect keya gaya hai 
connectDB();
app.get('/',(req,res)=>{
    res.send("server is running");
})

app.get('/register',(req,res)=>{
    res.send("Register is done")
})


app.listen(5000,()=>{
    console.log("Server is running on the http://localhost:5000")
})

