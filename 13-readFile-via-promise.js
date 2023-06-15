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

result
.then((data)=>{
    console.log("This is the actual content being read:-",data);
})
.catch((err)=>{
    console.log("There came an error and the error is :-",err);
})



