const express=require("express");
const app=express();



app.get("/books", logger,(req,res)=>{
    return res.send("hello books");
});

app.get("/libraries",logger,cheakPermission,(req,res)=>{
    return res.send("hello libraries");
});
app.get("/authors",logger,cheakPermission,(req,res)=>{
    return res.send("hello authors");
});
function logger(req,res,next){
    console.log("permission for books by logger")
    next();
  
}
function cheakPermission(req,res,next){
    console.log("permission for libraries and author by logger and cheakpermission")
    next();
   
}

app.listen(5000,()=>{
    console.log("Listen to your port 5000")
})