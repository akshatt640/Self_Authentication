import mongoose from 'mongoose'
export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/self')
        console.log("Database is connect the successfully")
    } catch (err) {
        console.log("Not connect the  database ")
    }
} 
