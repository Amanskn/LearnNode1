const { readFile }=require('fs');

const getText=(path)=>{
    return new Promise((resolve, reject)=>{
        readFile(path,
        {encoding:'utf-8',flag:'r'},
        function(err,data){
            if(err)
                reject(err);
            else
                resolve(data);
        })

    })
}

const result=getText('./content/second.txt');
console.log("This is the result of getText:-",result);

// ---------------------------reading via promises
result
.then((data)=>{
    console.log("This is the actual content being read:-",data);
})
.catch((err)=>{
    console.log("There came an error and the error is :-",err);
})

console.log("Done with promise")

// ----------------------------reading via async/await stylings
const start= async ()=>{
    try {
        const first = await  getText('./content/first.txt');
        const second = await  getText('./content/second.txt');
        console.log("This is reading via async-await styling :- ",first);
        console.log("This is reading via async-await styling :- ",second);
        
    } catch (error) {
        console.log("Inside catch and the error is :-",error)    
        return ;
    }
}
start();

