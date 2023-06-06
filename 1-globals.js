// Globals - No Window object is there in Node because it is not a browser

// __dirname :- refers to the folder name, you can log the value and see it.
// __filename :- refers to the actial file path
// require :- it is a function to use modules
// module :- info about current module (file)
// process :- info about the environment where the program is being executed                  


// -------------------it will never stop
var num=1000;
// var id=setInterval(()=>{
//     console.log(num)
//     if(num==3000){
//         clearInterval(id);
//     }
// },num=num+1000)     ----->>>>   Avoid this type of increment here


// -------------------it will never stop
// var id=setInterval(()=>{
//     console.log(num)
//     if(num==3000){
//         clearInterval(id);
//     }
// },num+=1000)         ----->>>>   Avoid this type of increment here


// ----------------------Below is perfect
var id=setInterval(()=>{
    console.log(num)
    num+=1000;              //  ----->>>>   This is perfect increment
    if(num==3000){
        clearInterval(id);
    }
},num)
