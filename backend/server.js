import express  from "express"
import cors from 'cors'
import { connectDB } from "./config/db.js"
import userRouter from "./routes/userRoute.js"
import foodRouter from "./routes/foodRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

// app config
const app = express()
const port = process.env.PORT || 4000;


// middlewares
app.use(express.json()) // this middleware passes request from frontend to backend
app.use(cors()) // this middleware helps to acess any backend from frontend

// db connection
connectDB()

// api endpoints
app.use("/api/user", userRouter)
app.use("/api/food", foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/cart", cartRouter)
app.use("/api/order",orderRouter)

app.get("/", (req, res) => { //.get method is a http method which helps to request data from server
    res.send("API Working")
  });

app.listen(port, () => console.log(`Server started on http://localhost:${port}`))


//mongodb+srv://majumdarsanchita25:Sanchita25@cluster0.fete31l.mongodb.net/?