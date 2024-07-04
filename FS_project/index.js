const express=require("express")
const path=require('path')
const app=express()
const fs=require("fs")

app.use(express.json())
app.use(express.urlencoded({ extended:true}));
app.use(express.static(path.join(__dirname,'public')));//static
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    // res.send("Hello, I am Twinkal's backend");
    fs.readdir(`./files`,(err, files)=>{
        console.log(files)
        res.render("index",{files:files})//ejs file and sending data object to ejs
    })
})

app.post('/create',(req,res)=>{
    console.log(req.body)
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,req.body.details,(err)=>{
        console.log(err)
        res.redirect("/")
    })
})

//"/author/:home" is route  :home is dynamic part
// app.get("/author/:username",(req,res)=>{
//     res.send(`Welcome, ${req.params.username}`);
//     // res.render("index")//ejs file
// })

// app.get("/author/:username/:age",(req,res)=>{
//     res.send(`Welcome, ${req.params.username} of age ${req.params.age}`);
//     // res.render("index")//ejs file
// })

app.listen(3000,()=>{
    console.log("Server is running")
})
//localhost:3000/

