const {readFile, writeFile} =require("fs");

console.log("Start")

  readFile('./content/first.txt',
  { encoding: 'utf8', flag: 'r' },
  function (err, data) {
      if (err)
          console.log(err);
      else{
        const first=data;
        console.log("first file is read:- ",first);
        readFile('./content/second.txt',
        {encoding:'utf-8',flag:'r'},
        function(err,data){
          if (err)
            console.log(err);
          else{
            const second=data;
            console.log("Second file is read:- ",second);
            writeFile('./content/result-async.txt',
            `This is data to be written via writeFile ${first} ---- ${second} `,
            (err) => {
              if (err) {
                console.error('An error occurred while writing the file:', err);
              } else {

                console.log('File written successfully! ');
              }
            })
          }
        })
      }
          
  });

 
  console.log("Finish")






