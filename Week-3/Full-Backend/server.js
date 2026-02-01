import exp from 'express'
import { userApp } from './APIs/UserApi.js'
import { productApp } from './APIs/ProductApi.js'
import { connect } from 'mongoose'
//create server
const app=exp()
app.use(exp.json())
const port=4000
//connect to db server
// function connectDB(){
//     connect('mongodb://localhost:27017')//all block methods returns promise//connection is established or not
//     .then(()=>console.log("Connected to db"))
//     .catch((err)=>console.log("error in connecting to database",err))
// }
async function connectDB() {
    try{
    await connect('mongodb://localhost:27017/anuragdb')
    console.log("connection success")
    //assign port 
    app.listen(port,()=>console.log("server is running at port ",port))
    }
    catch(err){
        console.log("Err in db connection ",err)
    }
}
connectDB()
//if path starts with /user-api,forward req to userApp
app.use("/user-api",userApp)
app.use("/product-api",productApp)

//error handling middleware
// function errorHandler(err,req,res,next){
//     res.json({message:"error",reason:err})
// }
// app.use(errorHandler)

app.use((err,req,res,next)=>{
    res.json({message:"error",reason:err})
})