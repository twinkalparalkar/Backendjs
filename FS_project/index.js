const express=require("express")
const path=require('path')
const app=express()

app.use(express.json())
app.use(express.urlencoded({ extended:true}));
app.use(express.static(path.join(__dirname,'public')));//static
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    // res.send("Hello, I am Twinkal's backend");
    res.render("index")//ejs file
})
//"/author/:home" is route  :home is dynamic part
app.get("/author/:username",(req,res)=>{
    res.send(`Welcome, ${req.params.username}`);
    // res.render("index")//ejs file
})

app.get("/author/:username/:age",(req,res)=>{
    res.send(`Welcome, ${req.params.username} of age ${req.params.age}`);
    // res.render("index")//ejs file
})

app.listen(3000,()=>{
    console.log("Server is running")
})
//localhost:3000/

