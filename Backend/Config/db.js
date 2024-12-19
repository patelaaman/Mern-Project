import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect("mongodb+srv://amanpatel51251:k0BNrGSZD3jZNegr@cluster0.094jx.mongodb.net/liquid-del").then(()=>console.log("DB Connected Succesfully"));
}