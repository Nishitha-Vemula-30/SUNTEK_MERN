import exp from "express"
import { register,authenticate } from "../services/authservice.js"
import { UserTypeModel } from "../models/UserTypeModel.js"
import {ArticleModel} from "../models/ArticleModel.js"
import { checkAuthor } from "../middlewares/checkAuthor.js"
import { verifyToken } from "../middlewares/verifyToken.js"

export const authorRoute=exp.Router()


//Register author(public)
authorRoute.post("/users",async(req,res)=>{
    //get userObj from req
    let userObj=req.body
    //call register
    const newUserObj=await register({...userObj,role:"AUTHOR"})
    //role should be set by serverside
    //send res
    res.status(201).json({message:"author created",payload:newUserObj})
})


//authenticate author(public)
// authorRoute.post("/userAuthenticate",async(req,res)=>{
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
//create article(protected)
authorRoute.post("/articles",verifyToken,checkAuthor,async(req,res)=>{
    //get article from req
    const newArticle=req.body
    //check for the author
    // const author=await UserTypeModel.findById(newArticle.author)
    // if(!author || author.role!=="AUTHOR")
    //     return res.status(401).json({message:"Invalid author"})
    //create article document
    const articleDoc=new ArticleModel(newArticle)
    //save
    let createdArticleDoc=await articleDoc.save()
    //send res
    return res.status(201).json({message:"Article created",payload:createdArticleDoc})
})

//read articles of author(protected)
authorRoute.get("/articles/:authorId",verifyToken,checkAuthor,async(req,res)=>{
    //get author id
     const aid=req.params.authorId
    // //check the author
     const author=await UserTypeModel.findById(aid)
    // if(!author || author.role!=="AUTHOR")
    //     return res.status(401).json({message:"Invalid author"})
    //read articles by this author which are active
    const articles=await ArticleModel.find({author:aid,isArticleActive:true}).populate("author","firstName")
    //send res
    res.status(200).json({message:"articles",payload:articles})
})
//update the article(protected)
authorRoute.put("/articles",verifyToken,checkAuthor,async(req,res)=>{
    //get modified article from req
    let {articleId,title,category,content,author}=req.body
    //find article
    const existingArticle=await ArticleModel.findOne({_id:articleId,author:author})
    if(!existingArticle)
        return res.status(401).json({message:"Article not found"})
    //updte the article
    let updatedArticle=await ArticleModel.findByIdAndUpdate(articleId,
       {
        $set:{title,category,content}
       },{new:true})
    //send res(updated article)
    res.status(200).json({message:"articles",payload:updatedArticle})
})

//delete(soft delete) article(protected)
authorRoute.put("/articles/delete/:aid",verifyToken,checkAuthor,async(req,res)=>{
    const aid=req.params.aid
    const articleOfDb=await ArticleModel.findById(aid)
    if(!articleOfDb)
    {
        return res.status(404).json({ message: "Article not found" })
    }
    articleOfDb.isArticleActive=false
    await articleOfDb.save()
    res.status(200).json({message:"Article Deleted"})
})
