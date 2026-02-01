import { Schema,model } from "mongoose";
//create user Schema fields like (username,password,age) 
const userSchema=new Schema({
      username:{
        type:String,           //datatype starts with Capital
        required:[true,"Username is Required"],
        minLength:[4,"Minimum length should be 4"], //for string
        maxLength:[6,"Maximum length exceeded"]
      },
      password:{
        type:String,
        required:[true,"Password is Required"]
      },
      age:{
        type:Number,
        required:[true,"Age is Required"], 
        min: [18,"Age should be above 18"],      //for number
        max:[25,"Age should be less than 25"]
      }
},{
  strict:"throw"//when user enters other fields which are not part of this 
})
//create user model with that schema
export const userModel=model("user",userSchema)  //user is name taken by mongoose and creates collection user
//make plural from user to users