const express = require("express");
const router=express.Router()
const app = express();

// app.use(logger)

app.set("view engine","ejs")
app.use(express.static("public"))

// app.get("/",logger,(req,res)=>{
//     res.render("index",{text:"sdbkhdj"})
// })

const userRouter= require("./routes/users");

app.use("/users",userRouter);


function logger(req,res,next){
    console.log(req.originalUrl);
    next();
}



app.listen(3300);