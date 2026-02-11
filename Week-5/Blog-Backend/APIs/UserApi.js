import exp from "express"
import { authenticate, register } from "../services/authservice.js"
import { ArticleModel } from "../models/ArticleModel.js"
import { verifyToken } from "../middlewares/verifyToken.js"

export const userRoute=exp.Router()

//Register user
userRoute.post("/users",async(req,res)=>{
    //get userObj from req
    let userObj=req.body
    //call register
    const newUserObj=await register({...userObj,role:"USER"})
    //role should be set by serverside
    //send res
    res.status(201).json({message:"user created",payload:newUserObj})
})
//authenticate user
// userRoute.post("/userAuthenticate",async(req,res)=>{
//     //get user credential object
//     const userCred=req.body
//     //call authenticate service
//     const {token,user}=await authenticate(userCred)
//     //save token as httpOnly cookie
//     res.cookie("token",token,{
//         httpOnly:true,
//         sameSite:"lax",
//         secure:false
//     })
//     //send res
//     res.status(200).json({message:"login success",payload:user})

// })
//read all articles(protected route)
userRoute.get("/articles",async(req,res)=>{
    let articles=await ArticleModel.find({isArticleActive:true})
    return res.status(200).json({message:"All articles",payload:articles})
})
//add comment to an article(protected route)
userRoute.put("/userComment/:aid",verifyToken,async(req,res)=>{
    //articleid form params
    const articleId = req.params.aid
    //comment from req.body
    const newComment = {
        user: req.user.userId,
        comment: req.body.comment
    }

    const updatedArticle = await ArticleModel.findByIdAndUpdate(
        articleId,
        { $push: { comments: newComment } },
        { new: true }
    )

    res.status(200).json({ message: "Comment added", payload: updatedArticle })
})