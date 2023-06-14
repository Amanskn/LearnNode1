// -----------------Demo of Synchronous code's execution
console.log("First Task");
console.time();
for(let i=0;i<1000000000;i++){
    // console.log("Inside loop")
}
console.timeEnd();

console.log("End TAsk")


// -----------------Demo of Asynchronous code's execution
console.log("First task in context of Asynchronous")
console.time();
setTimeout(()=>{
    console.log("Inside set timeout")
},0);
console.timeEnd();
console.log("End task in context of Asynchronous")