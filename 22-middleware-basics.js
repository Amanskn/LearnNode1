const express= require('express');

const app = express();

// ------------A simple middleware
const logger = (req,res,next)=>{
    
    console.log("Middleware is called");
    console.log(req.url)
    console.log(req.method)
    console.log(new Date().getFullYear());
    console.log("Middleware ended")
    
    next();
    
    
}

app.get('/',logger,(req,res)=>{
    
    res.send("Home Page")
})

app.listen(port = 5000,(err)=>{
    if(err){
        console.log("There came an error while running the server and the error is :-",err);
        return;
    }
    else{
        console.log("Server is running on port:-",port)
    }
})