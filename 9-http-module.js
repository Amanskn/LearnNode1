const http=require('http');

const server=http.createServer((req,res)=>{
    console.log("This is the requested url:-",req.url)
    console.log("This is the base url:-",req.headers.host)

    if(req.url=='/')
        res.end("<h1>Home Page</h1>")
    else if(req.url=='/about')
        res.end("<h1>About Page</h1>")
    else
        res.end(`<h1>
        OOps This page does not exist
        </h1>
        <p>
        <a href="/">Back to home</a>
        </p>
        `)
});
server.listen(port=7000,(err)=>{
    if(err)
        console.log("Err in running the server and the error is :-",err)
    else
        console.log("Server is running on port:-",port)
});