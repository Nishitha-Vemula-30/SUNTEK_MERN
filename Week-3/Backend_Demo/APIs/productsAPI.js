import express from "express"
//create mini express(separate route)app
export const ProductApp=express.Router()
//Products API

let Products=[]
ProductApp.get("/products",(req,res)=>{
    res.status(200).json({message:"Products",payload:Products})
})

ProductApp.get("/products-id/:id",(req,res)=>{
    // console.log(req.params)//[Object: null prototype] { id: '101' }
    //read id from url paramter
    let productId=Number(req.params.id )     //returns an object
    //retiurns as { id as paramname}=>{ id: '101' }
    //READ user by this id
    let product=Products.find(productObj=>productObj.productId==productId)
    if(!product)
        return res.status(404).json({message:"Product not found"})
    //send res
    res.status(200).json({message:"Products",payload:product})

})

ProductApp.get("/products-brand/:brand",(req,res)=>{
    let productBrand=req.params.brand     //returns an object
    let product=Products.filter(productObj=>productObj.brand==productBrand)
    if(!product)
        return res.status(404).json({message:"Product not found"})
    //send res
    res.status(200).json({message:"Products",payload:product})
})

ProductApp.post("/products",(req,res)=>{
     let newProduct=req.body
     Products.push(newProduct)
     res.status(200).json({message:"product added",payload:newProduct})
})

ProductApp.put("/products/:id",(req,res)=>{
    let productId=Number(req.params.id)
    let modifyProduct=req.body
   let prodIndex=Products.findIndex(productObj=>productObj.productId===productId)
   if(prodIndex==-1)
    return res.status(404).json({message:"Product not found"})
   modifyProduct.id=productId
   Products.splice(prodIndex,1,modifyProduct)
   res.status(200).json({message:"Updated",payload:modifyProduct})
})

ProductApp.delete("/products/:id",(req,res)=>{
      let productId=Number(req.params.id)
      let prodIndex=Products.findIndex(productObj=>productObj.productId===productId)
      if(prodIndex==-1)
          return res.status(404).json({message:"Product not found"})
    Products.splice(prodIndex,1)
    res.status(200).json({message:"Product Deleted"})  
})














