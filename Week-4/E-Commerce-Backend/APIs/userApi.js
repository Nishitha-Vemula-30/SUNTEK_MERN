import exp from "express"
import { UserModel } from "../Models/UserModel.js"
import { ProductModel } from "../Models/ProductModel.js"
import {hash} from "bcryptjs"

export const userRoute=exp.Router()

userRoute.get("/users",async(req,res)=>{
    //read users from DB
    let users=await UserModel.find()
    //send res
    res.status(200).json({message:"users",payload:users})
})
//Create User
userRoute.post("/users",async(req,res)=>{
    //get newuser from req
    let newUser=req.body
    //run validator ,will invoke all mongodb validators
    await new UserModel(newUser).validate()
    //hash th password
    let hashedpassword=await hash(newUser.password,12)
    //replace the plain password to hashed password
    newUser.password=hashedpassword
    //create new user document
    let newUserDoc=new UserModel(newUser)
    //we have already validated ,so no need to validate again
    await newUserDoc.save({validateBeforeSave:false})
    //send res
    res.status(200).json({message:"user created"})
})

// //Add product to users cart
// userRoute.put("/user-cart/user-id/:uid/product-id/:pid",async(req,res)=>{
        
//     //read uid,pid from url parameters
//     let x=req.params  //{}
//     console.log(x)//[Object: null prototype] {
//   //uid: '698072173f99c53139e8f171',
//   //pid: '69806b53a3093678f55039a1'
// //}

//   //check user
//   let user=await UserModel.findById(x.uid)
//   if(!user)
//     return res.status(401).json({message:"user not found"})
//   //check product
//   let product=await ProductModel.findById(x.pid)
//   if(!product)
//     return res.status(401).json({message:"product not found"})

//   //perform the update
//   let modiefiedUser=await UserModel.findByIdAndUpdate(
//     x.uid,
//     {$push:{cart:{product:x.pid}}},
//     {new:true}).populate("cart.product")//new:true=>“Return the UPDATED document”
//   //res
//   res.status(200).json({message:"product added to cart",payload:modiefiedUser})

// })

userRoute.get("/users/:uid",async(req,res)=>{
    let {uid}=req.params

    //find user
    let userObj=await UserModel.findById(uid).populate("cart.product","productName price")//aggregation ,creates 
    //uisng populate we get entire details of product not only objectid
    //second argument is project: which fields to project
    res.status(200).json({message:"User ",payload:userObj})
})

userRoute.put("/users/user-id/:uid/product-id/:pid",async(req,res)=>{
    let {uid,pid}=req.params
    let user=await UserModel.findById(uid)
    if(!user)
        return res.status(401).json({message:"user not found"})
    let product=await ProductModel.findById(pid)
     if(!product)
        return res.status(401).json({message:"product not found"})
    let modifiedUser
    const productInCart=user.cart.find(item=>item.product==pid) //item.product.toString()===pid//no need of this
    if (productInCart) {
    // increase quantity
    modifiedUser = await UserModel.findOneAndUpdate(
      { _id: uid, "cart.product": pid },
      { $inc: { "cart.$.quantity": 1 } },//can also use $set but need existing data
      { new: true }
    ).populate("cart.product");
  } else {
    // add new product
    modifiedUser = await UserModel.findByIdAndUpdate(
      uid,
      { $push: { cart: { product: pid, quantity: 1 } } },
      { new: true }
    ).populate("cart.product");
  }
    res.status(200).json({message:"Product added to cart",payload:modifiedUser})
})






