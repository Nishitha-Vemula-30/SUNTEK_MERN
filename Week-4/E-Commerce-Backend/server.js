import express from "express"
import { connect } from "mongoose"
import {userRoute} from "./APIs/userApi.js"
import {productRoute} from "./APIs/productApi.js"

const app=express()
app.use(express.json())

const port=5000

async function ConnectDb(){
    try{
        await(connect("mongodb://localhost:27017/ecommerce"))
        console.log("connection success ")
        app.listen(port,()=>{
     console.log("Server is running in port ",port)})
    }
    catch(err)
    {
        console.log("Err in db connection ",err)
    }
}
ConnectDb()

app.use("/user-api",userRoute)
app.use("/product-api",productRoute)

app.use((err,req,res,next)=>{
    res.json({message:"error",reason:err.message})
})
