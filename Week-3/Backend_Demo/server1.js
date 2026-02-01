import express from 'express'
import { userApp } from './APIs/userAPI.js'
import { ProductApp } from './APIs/productsAPI.js'
//create server
const app=express()  
app.listen(3000,()=>console.log("HTTP server listening on port 3000"))

//body parsing middleware
app.use(express.json())
app.use("/user-api",userApp)
app.use("/product-api",ProductApp)