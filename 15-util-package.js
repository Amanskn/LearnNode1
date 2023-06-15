const { readFile,writeFile }=require('fs');

const util =require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);





// ----------------------------reading via async/await stylings
const start= async ()=>{
    try {
        const first = await  readFilePromise('./content/first.txt','utf8');
        const second = await  readFilePromise('./content/second.txt','utf8');
         await writeFilePromise('./content/madeBy-Write.txt',` This is the data being wriiten recently via writeFilePromise:- ${first}, ${second}`);
        const recentData = await  readFilePromise('./content/madeBy-Write.txt','utf8');
        console.log("Reading done via util.promisify for first file:- ",first);
        console.log("Reading done via util.promisify for second file :- ",second);
        console.log("focus on this:-",recentData)
        
    } catch (error) {
        console.log("Inside catch and the error is :-",error)    
        return ;
    }
}
start();


// ---------------------------reading via promises
// result
// .then((data)=>{
//     console.log("This is the actual content being read:-",data);
// })
// .catch((err)=>{
//     console.log("There came an error and the error is :-",err);
// })

// console.log("Done with promise")






// const getText=(path)=>{
    //     return new Promise((resolve, reject)=>{
        //         readFile(path,
        //         {encoding:'utf-8',flag:'r'},
        //         function(err,data){
            //             if(err)
            //                 reject(err);
            //             else
            //                 resolve(data);
            //         })
            
            //     })
// }