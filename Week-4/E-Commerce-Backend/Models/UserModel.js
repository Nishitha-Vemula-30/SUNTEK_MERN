import { Schema,model } from "mongoose";

//create cart schema
const cartSchema=new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref:"ecom-products"//name of product model
    },
   quantity:{
      type:Number,
      required:[true],
      default:1,
      min:1
   }
})
const userSchema=new Schema({
       name:{
          type:String,
          required:[true,"Name Required"]//instead of sending own error message from server,this is custeom simple msg "name req"easy to understand
       },
       email:{
          type:String,
          required:[true,"Email Required"],
          unique:[true,"duplicate user"] //not a validator but an optional//creates another index //add to index
       },
       password:{
          type:String,
          required:[true,"Password Required"]
       },
       cart:{
        type:[cartSchema]

       }
})
export const UserModel=model("ecom-users",userSchema)



