//this file contains logic about how backend connected to database
import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://majumdarsanchita25:Sanchita25@cluster0.fete31l.mongodb.net/tomato').then(()=>console.log("DB Connected"))
}
