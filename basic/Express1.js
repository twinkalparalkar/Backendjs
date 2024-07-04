/**Express.js is npm package, framework(manages everything giving response and receiving request)
framework is follow the flow/rules 

if you update code then we need to run 
So we use nodemon

client create request -> middleware-> routing ->server process and send response

middleware is when server accept request then we want to perform some task before reaching to route
middleware is used to add client details to request 
middleware ->app.use() is run always for all request
next() is used to forward request to next middleware or route

same route asel and reload kel, middleware run nahi honar
but route change kel tar middleware pan run honar 

**/
const express = require('express')
const app=express()

// request will be encoded into stream 
// server will convert that data to read by follow 2 line
app.use(express.json());//to read json
app.use(express.urlencoded({extended:true}));//to read urlencoded @

app.use(function(req,res,next){
    console.log("middleware1 started")
    next();
})

app.use(function(req,res,next){
    console.log("middleware2 started")
    next();
})
// app.get(route,requestHandler)//requestHandler is middleware
app.get("/",(req,res)=>{
    res.send("first1")
})
app.get("/second",(req,res,next)=>{
    res.send("second2")
    return next(new Error("error"))
})

//error Handling :-at last 
app.use(function(err,req,res,next){
    console.error(err.stack)
   res.status(500).send("Something broke!");
})

//route create karna:-https://www.youtube.com/:-domain+"/" route

app.listen(3000)
