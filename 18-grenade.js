const http = require('http');

// const server =http.createServer((req,res)=>{
//     res.end("Welcome");
// })


// Using event emitter API
const server =http.createServer();

// emits request event
// subscribe to it/listen for it/respond to it
// ---Behind the seen server emits the request event, OK
server.on('request',(req,res)=>{
    console.log("Done",req.url)
    res.end("Welc via event emitter");
})

// -----------registering an event listener for the 'listening' event, 
server.on('listening',(req,res)=>{
    console.log("listening")
    
})

// ----starting the server
server.listen(port=5000,(err)=>{
    if(err){
        console.log("Error in running the server and the error is :-",err);
        return;
    }
    console.log("Server is running on port:-",port)
    
})