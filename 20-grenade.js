const app=require('express')();
const port=7000;
const path=require('path');


// -----------Write this line or specifically send each of the css/images/js file etc...
app.use(require('express').static('./public'));

app.get('/',(req,res)=>{
    
    res.sendFile( path.join(__dirname,'./outer.html'));
})

// --------------see :- to avoid this individual handling of css, images, js, files we set the middleware express.static, Getting :-)
// app.get('/outerStyle.css',(req,res)=>{
    
//     res.sendFile( path.join(__dirname,'./public/outerStyle.css'));
// })


app.listen(port,(err)=>{
    if(err){
        console.log("Error in running the server and the error is :-",err)
    }
    else{
        console.log("Server is running on port:-",port);
    }
})