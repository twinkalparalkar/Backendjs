const fs = require('node:fs');//directly using fs packages:-writeFile,appendFile(updating),copyfile,rename,unlink(to remove file),rmdir(to remove empty folder)
// fs.appendFile("hey.txt","hey ,we enjoy learning yes enjoying",
// (err)=>{
//     if(err){console.log(err)}
//     else{console.log("done")}
// })

// fs.rename("hey.txt","Hello.txt",
// (err)=>{
//     if(err){console.log(err)}
//     else{console.log("done")}
// })

// fs.copyFile("hello.txt","cha.txt",
// (err)=>{
//     if(err){console.log(err)}
//     else{console.log("done")}
// })

// fs.unlink("cha.txt",(err)=>{
//     console.log(err)
// })

// fs.rmdir("./copy",{recursive:true},(err)=>{
//         if(err){console.log(err)}
//         else{console.log("done")}
//     })
// fs.rm("./copy",{recursive:true},(err)=>{
//         if(err){console.log(err)}
//         else{console.log("done")}
//     })

//how to create folder, readFile,read folder ,stat

// fs.readFile("hello.txt",(err,data)=>{
//     if(err){console.log(err)}
//     else{console.log(data,data.toString())//convert buffer to string 
//     }
// })

// fs.mkdir("copy1",(err)=>{
//             if(err){console.log(err)}
//             else{console.log("done")}
//         })//create folder
// fs.writeFile//to create file 

// fs.stat("basic.js",(err,stat)=>{
//                 if(err){console.log(err)}
//                 else{console.log(stat.isDirectory())}
//             })//check existence of folder/file 
// fs.readdir("copy1",(err,stat)=>{
//     if(err){console.log(err)}
//     else{console.log(stat)}
// })//to read folder
//callback async

//Http is protocol to follow this to send or get data/request 
// :-Protocol means rules of internet..networking 
// ....to follow this rule,this rule is pre-installed in your OS :window

const http=require('http')
const server=http.createServer((req,res)=>{
    res.end("hello world")
})

server.listen(3000);//server listening your request/interaction at http://localhost:3000/