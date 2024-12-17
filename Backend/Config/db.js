import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect("mongodb+srv://amanpatel51251:MAl8zXqKoKd0b9Uy@living.uq1ec.mongodb.net/?retryWrites=true&w=majority&appName=Living").then(()=>console.log("DB Connected Succesfully"));
}