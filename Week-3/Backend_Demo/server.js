//create HTTP server
   //import express module
import express from 'express' //here we didnt specify path,it will check in node_modules,for custom module sit is requires
//create server
const app=express()  //app is not predefined but standard //server is created
//Assign port number we can give any port number
app.listen(3000,()=>console.log("HTTP server listening on port 3000"))


//create API(req handlers)
//to create req handlers--create route
//route==handles req and send http res
//get req handling route(Read users)
//post req handling route(create users)
//put req handling route(update users)
//delete req handling route(delete a user)
//API contains routes:get,put all

//handling get req
app.get("/users",(req,res)=>{
    //send res to client
    res.json({"message":"This res from GET req handler"})
     
})

app.post("/user",(req,res)=>{
     //send res
     res.json({"message":"This res from POST req handler "})
})

app.put("/users/id",(req,res)=>{
     res.json({"message":"This res from PUT req handler "})
})

app.delete("/users/id",(req,res)=>{
     res.json({"message":"This res from DELETE req handler "})
})