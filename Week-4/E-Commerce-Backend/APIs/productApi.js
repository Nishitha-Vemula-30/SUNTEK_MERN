import exp from "express"
import { ProductModel } from "../Models/ProductModel.js"
export const productRoute=exp.Router()

productRoute.get("/products",async(req,res)=>{
    //read users from DB
    let products=await ProductModel.find()
    //send res
    res.status(200).json({message:"products",payload:products})
})
productRoute.post("/products",async(req,res)=>{
        let newProduct=req.body
        let newProductDoc=new ProductModel(newProduct)
        await newProductDoc.save()
        //send res
        res.status(200).json({message:"product created"})
})
