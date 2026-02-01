//separate route or mini express app
import exp from 'express'
import { userModel } from '../Models/UserModel.js'
export const userApp=exp.Router()

//USER API ROUTES
//Read user
userApp.get("/users",async(req,res)=>{
    //read users from DB
    let users=await userModel.find()
    //send res
    res.status(200).json({message:"users",payload:users})
})

userApp.post("/users",async(req,res)=>{
    //get newuser from req
    let newUser=req.body
    //create new user document
    let newUserDoc=new userModel(newUser)
    await newUserDoc.save()
    //send res
    res.status(200).json({message:"user created"})
})

//read user by objectid
userApp.get("/users/:id",async(req,res)=>{
      //get objectid from url param
      let objId=req.params.id
      
      //find user in db
      let userObj=await userModel.findById(objId)
      //send res
      res.status(200).json({message:"user",payload:userObj})
})

userApp.put("/users/:id",async(req,res)=>{
    //get objid from url params
     let objId=req.params.id
     console.log(req.params)//[Object: null prototype] { id: '697dbf7e9acecc5cdab8f421' }
     //get modified user from req
     let modifiedUser=req.body
     //make update
    let latestUser= await userModel.findByIdAndUpdate(
        objId,
        {$set:{...modifiedUser}},
        {new:true})
    res.status(200).json({message:"modified",payload:latestUser})
})

userApp.delete("/users/:id",async(req,res)=>{
    let objId=req.params.id
    //delete user by id
    let deletedUser=await userModel.findByIdAndDelete(objId)
    res.status(200).json({message:"user deleted",payload:deletedUser})

})