1.Generate package.json
    npm init -y
    optional =>add type:module in pacakge.json for importing and exporting 
2.create server.js    
3.install,import "express" and create HTTP server .Assign port

###connect mongoDB database

REST API ==>   mongodb native driver  ==> MONGODB Server
REST API ==>  mongodb ODM tool(mongoose)  ==> MONGODB Server


sequelize (ORM TOOL)is used to not writing queries ,can write just names like insert,update
Mongodb also contains one tool (ODM TOOL) object is mapping to document
   validation rules,filter

===STEPS====
a.install mongoose and connect to mongodb server
    npm i mongoose
b.Create Schema of resource(blue print of document)
      valiadation of data from req
c.create Model of that Schema
d.Perform db operations on that model


==============================================================
import { connect } from 'mongoose'
webserver and database server == mysql or mongodb
db protocol for mongodb==mongodb


AFTER SUCCESSFULLY STARTED OF DATABASE SERVER,WEB SERVER SHOULD START
IF STARTED BEFORE THEN NO USE
ALL DATABASE OPERATIONS ARE BLOCKING REQ
====AWAIY=====
pause THIS function until MongoDB responds
==============================================================
ERROR HANDLING

when we get an error ,we get s html format
but we need json format
//error handling middleware
function errorHandler(err,req,res,next){
    res.json({message:"errr",reason:err})
}

========================================================
RUNNING VALIDATORS 
normally validators willnot run in updation
write {new:true,runValidators:true} in put to run valiadtors in updation also