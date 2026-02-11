import { Schema,model } from "mongoose";

const productSchema=new Schema({
    productName:{
        type:String,
        required:[true,"Product name Required"]
    },
    price:{
        type:Number,
        required:[true,"Product Price Required"]
    },
    brand:{
        type:String,
        required:[true,"Product Brand Required"]
    }
},{
    strict:true
})

export const ProductModel=model("ecom-products",productSchema)//name of product model