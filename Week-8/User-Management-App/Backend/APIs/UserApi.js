//create mini-express App
import express from "express"
import {userModel} from "../Models/UserModel.js"
const userRoute=express.Router()
//USER API ROUTES
//create User
userRoute.post("/users",async(req,res)=>{
     let newUser=req.body
     let newUserDoc=new userModel(newUser)
    let user=await newUserDoc.save()
    //send res
    res.status(201).json({message:"user created",payload:user})

})
//Read all users
userRoute.get("/users",async(req,res)=>{
    //read users from DB
    let users=await userModel.find({status:true})
    //send res
    res.status(200).json({message:"users",payload:users})
})

//Read user by id
userRoute.get("/users/:id",async(req,res)=>{
    let objId=req.params.id
      
      //find user in db
      let userObj=await userModel.findById({_id:objId,status:true})
      //check user
      if(!userObj)
        return res.status(404).json({message:"user not found"})
      //send res
      res.status(200).json({message:"user",payload:userObj})
})

//Delete a User by iD
userRoute.delete("/users/:id",async(req,res)=>{
    let objId=req.params.id
    //delete user by id
    let deletedUser=await userModel.findByIdAndUpdate(objId,{$set:{status:false}})
    if(!deletedUser){
        return res.status(404).json({message:"user not found"})
    }
    res.status(200).json({message:"user deleted"})

})
//Update user by id

//Activate User(change status to true)
//PUT(complete change) & PATCH(partial change)

userRoute.patch("/users/:id",async(req,res)=>{
    let objId=req.params.id
    //delete user by id
    let user=await userModel.findByIdAndUpdate(objId,{$set:{status:true}},{new:true})
    //send res
    res.status(200).json({message:"user activated",payload:user})

})


export default userRoute





