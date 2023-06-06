 // CommonJS, every file is a module (by default)
// console.log(module)

console.log("Inside module file got it")
const fun1=()=>{
    console.log(`Hello via fun1`)
}
const fun2=()=>{
    console.log(`Hello via fun2 Got it`)
}
let fun3=()=>{
    console.log("Third fun bvnbvcalled")
}
const def=()=>{
    console.log("Default fun called");
}
var num=9023;
module.exports={
    fun1,num23:num,
    fun2,def,fun3
};

// module.exports=def;