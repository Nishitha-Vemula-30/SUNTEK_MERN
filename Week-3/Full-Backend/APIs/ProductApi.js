import exp from "express"
import { productModel } from "../Models/ProductModel.js"
export const productApp=exp.Router()

//USER API ROUTES
//Read user
productApp.get("/products",async(req,res)=>{
    //read users from DB
    let products=await productModel.find()
    //send res
    res.status(200).json({message:"products",payload:products})
})

productApp.post("/products",async(req,res)=>{
        let newProduct=req.body
        let newProductDoc=new productModel(newProduct)
        await newProductDoc.save()
        //send res
        res.status(200).json({message:"product created"})
})

productApp.get("/products/:id",async(req,res)=>{
      //get objectid from url param
      let objId=req.params.id
      
      //find user in db
      let productObj=await productModel.findById(objId)
      //send res
      res.status(200).json({message:"product",payload:productObj})
})

productApp.put("/products/:id",async(req,res)=>{
    //get objid from url params
     let objId=req.params.id
     console.log(req.params)//[Object: null prototype] { id: '697dbf7e9acecc5cdab8f421' }
     //get modified user from req
     let modifiedProduct=req.body
     //make update
    let latestProduct= await productModel.findByIdAndUpdate(objId,{$set:{...modifiedProduct}},{new:true,runValidators:true})
    res.status(200).json({message:"modified",payload:latestProduct})
})