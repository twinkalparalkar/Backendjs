var arr=[1,2,3,4]
//arr forEach map filter find indexOf
arr.forEach((element)=>{
    console.log(element+2)
    return element+2
})//not return 

let new_array=arr.map((element)=>{
    return element*2//to create new array
})
console.log(new_array)

let new2=new_array.filter((element)=>{
    return element>3
})
console.log(new2)

console.log(new_array.find((element)=>{
    if(element==6)return element;//if element present just read that element or undefined
}))

console.log(new2.indexOf(1))//return index else -1

//object 
let obj={ name:"harry",
    age:45,//key value pair
};
obj.age=67
Object.freeze(obj)//restrict to changes value
obj.name="kl"
console.log(obj,typeof(obj),obj.name,obj["age"],obj["Age"],obj.length)//obj[age] is wrong

function abcd(a,b,c){
    return "hello world"
}
console.log(abcd.length,"is length of argument",typeof(abcd))//function is object

//async js coding

// var blob=await fetch(`api`)
async function abcds(){
    let ans=await fetch(`api`);
    let res=ans.json()
}

// Node.js is not programing /technology/framework/library/software
//Node.js is runtime environment ...js se backend nahi ban sakta, js me functionality nahi he backend liye..
// google chrome ka v8 engine se backend Node.js ..but google chrome c++ me he
// so Node.js convert js into c++ code (Node.js is js runtime environment to create backend )

//npm is like play store....to upload package(code) and we can use other's packages
// npm init
//package.json nahi ...node.js ch kahich nahi
// for Node.js project....npm init (to create project & ask name) or npm init -y
//this will create package.json (details of Node.js project)
//npm install in chrome (Node.js Documentation)



