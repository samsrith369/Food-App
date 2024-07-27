import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://samsrithraman369:fooddelivery@cluster0.f0gmuce.mongodb.net/fooddel').then(()=>console.log("DB connected"))
} 