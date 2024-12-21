import express from "express"
import cors from "cors"
import { connectDB } from "./Config/db.js"
import foodRouter from "./routes/footRoute.js"
import userRouter from "./routes/userRoute.js"
import "dotenv/config.js"

// app Config
const app = express()
const port =4001


// middleware
app.use(express.json()) 
app.use(cors())

/*
app.get("/",(req,res)=>{
    res.send("API  Working")

})*/

// Db Connection
connectDB();


// api  endpoint
app.use("/api/food",foodRouter)
app.use("/image",express.static("uploads"))
app.use("/api/user",userRouter)

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://amanpatel51251:<db_password>@living.uq1ec.mongodb.net/?
//mongodb+srv://amanpatel51251:<db_password>@living.uq1ec.mongodb.net/