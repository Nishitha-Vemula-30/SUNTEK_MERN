//Create user schema with validations
//craete user model for user schema
import { Schema,model } from "mongoose";
const userSchema=new Schema({
    name:{
        type:String,
        required:[true,"Name Required"]
    },
    email:{
        type:String,
        required:[true,"Email Required"],
        unique:[true,"Email should be unique"]
    },
    dateOfBirth:{
      type:Date,
      required:[true,"DOB Required"]
    },
    mobileNumber:{
        type:Number
        },
    //for soft delete
    status:{
        type:Boolean,
        default:true  
    }
},
{strict:"throw",//when user enters other fields which are not part of this schema ,then db dont stores unrelated fields
  timestamps:true,
  versionKey:false}
)

export const userModel=model("user",userSchema)