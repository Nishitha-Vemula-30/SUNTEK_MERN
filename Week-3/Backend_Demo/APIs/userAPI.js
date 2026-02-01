import express from "express"
//create mini express(separate route)app
export const userApp=express.Router()


//create a custom middleware
function middleware(req,res,next){
    console.log("middleware executed")
   // res.json({message:"res from middleware"})
   //forward req to next middleware
   next()
}
function middleware1(req,res,next){
    console.log("middleware1 executed")
   // res.json({message:"res from middleware"})
   //forward req to next middleware
   next()
}
//to execute for every incoming request
//app.use(middleware)
//only for specific route,use middleware function name in route
//app.use(middleware1)

//test local in-memory data
let users=[]

userApp.get("/users",(req,res)=>{
    //send res to client
    res.status(200).json({message:"All users",payload:users})  //meassage ,payload
})

userApp.post("/users",(req,res)=>{
     //get user resource from req
     //client is sending resource

     //req.body cosnists of json
     let newUser=req.body
     console.log(newUser)
     //insert user into users array
     users.push(newUser)
     //send res
     res.status(201).json({message:"User Created"})
})

userApp.put("/users",(req,res)=>{
    //cleint asking server to upadting modify the data of user
     
     //get modified user from req
     let modifiedUser=req.body
     //console.log(modifiedUser)
     //find the user with id exists in array"
      //if user not found,send res as "User not found"
     //if user found,then modify the user
     //send res as "user modified"
     let userIndex=users.findIndex(userObj=>userObj.id===modifiedUser.id)
     if(userIndex==-1)
       return res.status(404).json({message:"User not found"})
    
        // users[userIndex]==user
        let deletedUser=users.splice(userIndex,1,modifiedUser)
        res.status(200).json({message:"user modified",users})
    
    //we can write else or return for execute only one 
  
})
//read user by id
userApp.get("/users/:id",(req,res)=>{
    console.log(req.params)//[Object: null prototype] { id: '101' }
    //read id from url paramter
    let Userid=Number(req.params.id )     //returns an object
    //retiurns as { id as paramname}=>{ id: '101' }
    //READ user by this id
    let user=users.find(userObj=>userObj.id==Userid)
    if(!user)
        return res.status(404).json({message:"user not found"})
    //send res
    res.status(200).json({message:"user",payload:user})
}
)
userApp.delete("/users/:id",(req,res)=>{
     let userId=Number(req.params.id)
     let user=users.find(userObj=>userObj.id==userId)
    if(!user)
        return res.status(404).json({message:"user not found"})
    //send res
    users.splice(user,1)
    res.status(200).json({message:"user Deleted",payload:user})
    
})
//===================================================================//

