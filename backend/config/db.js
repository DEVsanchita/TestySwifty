//this file contains logic about how backend connected to database
import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect(process.env.MONGO_URI, {}).then(()=>console.log("DB Connected"))
}
