import { Schema,model } from "mongoose";
const productSchema=new Schema({
    pid:{
       type:String,
       required:[true,"product is required"],
       minLength:[3,"min length is 3"],
       maxlength:[6,"id max length is 6"]
    },
    productName:{
        type:String,
        required:[true,"product name required"],
        minLength:[5,"min limit is 5"],
        maxLength:[10,"limit exceeded"]
    },
    price:{
        type:Number,
        required:[true,"Price is required"],
        min:[3,"min limit is 3"],
        max:[50000,"max limit is 10000"]
    }
})
export const productModel=model("product",productSchema)