// npm - global command, comes with node
// npm --version or npm -v

// local dependency - use it only in this particular project
// npm i <package-name>


// global dependency - use it in any project
//  npm install -g <package-name>
//  sudo npm install -g <package-name>   (for macOS) 

// package.json - manifest file {stores important info about project/package (like dependencies and all) }
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _= require("lodash");
const arr = [1,[2,[3,[4]]]];
console.log("Original Array",arr)
console.log(_.flattenDeep(arr));