
const express = require("express");
const router=express.Router();



router.get("/",(req,res)=>{
    res.render("index",{text:"users"}) 
})
router.get("/new",(req,res)=>{
    res.render("index",{text:"new users"}) 
})

router.post("/",(req,res)=>{
    res.send("created user");
})
router.route("/:id")
      .get((req,res)=>{
            res.send(`user get  ${req.params.id}  ${req.user}` ) 
      }).put((req,res)=>{
        res.send(`user update ${req.params.id}`)
       }).delete((req,res)=>{
        res.send(`user delete  ${req.params.id}`)
       });

const users = [{name:"anrony"},{name :"subin"},{name:"angel"}]
router.param("id",(req,res,next,id)=>{
    console.log(`params  : ${users[id].name}`);
    req.user=users[id].name;
    next()
})


module.exports=router