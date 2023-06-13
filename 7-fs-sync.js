const {readFileSync, writeFileSync} =require("fs");
  
const file1Data=readFileSync('./content/first.txt',{ encoding: 'utf8', flag: 'r' });
const file2Data=readFileSync('./content/second.txt',{ encoding: 'utf8', flag: 'r' });

console.log("This is the data of file1 :- ",file1Data)
console.log("This is the data of file2 :- ",file2Data)

const data = ` Aman Maddhesia Checking.....This is the data to be written to the file. ${file1Data} and ${file2Data}`;
writeFileSync('./content/temporary.txt', data, { encoding: 'utf8', flag: 'w' });

const temporaryFileData=readFileSync('./content/temporary.txt',{ encoding: 'utf8', flag: 'r' });
console.log("This is the temporary file's data :- ",temporaryFileData)