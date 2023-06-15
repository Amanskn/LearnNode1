const http=require('http');

const server = http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end("<h1>Home Page</h1>")
    }
    else if(req.url=='/about'){
        // This is Just a simple loop which is taking too long time
        // This loop is just to demonstrate that as soon as one hits the about url then 
        // other user who hits other than about url will not be fed with the response till this loop gets executed 
        // you can check it.
        // Just go to about url and then hit other urls in other tabs and see the effect. Getting?...
        // Conclusion:- This is the place where the need of Asynchronous code is felt and boom the async code concept came into picture.
    //    -----BLOCKING CODE!!
        for(let i=0;i<1000000000000;i++){

        }
       
         res.end("<h1>AboutPage</h1>")
    }
    else
        res.end("<h1>Error Page</h1>")

})
server.listen(port=8000,(err)=>{
    if(err)
        console.log("Error in running the server and the error is :-",err)
    else
        console.log("Server is running on port:-",port);
})

console.log("Port = ",port)












