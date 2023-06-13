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
const num567=9023;
// console.log(module.exports)
module.exports={
    fun1,num567:89,
    fun2,def,fun3
};

// console.log(module.exports)
console.log("between")
// console.log(module)
// module.exports=def;
