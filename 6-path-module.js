const path=require('path');
// .sep in path module shows the separator used in a path
console.log("This is the separator used",path.sep);

// Method to join paths
const filePath=path.join(__filename,"folder","subfolder","1-global.js");
console.log(filePath)

//Extract the filename:
var filename = path.basename(filePath);
console.log(filename);



// path.join vs path.resolve 
console.log(path.resolve('/a', 'b', 'c'));     //    C:\a\b\c
console.log(path.resolve('/a', '/b', 'c'));    //    C:\b\c
console.log(path.resolve('/a', '/b', '/c'));   //    C:\c
console.log(path.resolve('/a', '/b', '\c'));   //    C:\b\c
console.log(path.resolve('a', 'b', 'c'));                    // //    C:\{current_working_directory}\a\b\c
console.log(path.resolve('\a', 'b', 'c'));                    // //    C:\{current_working_directory}\a\b\c
console.log(path.resolve('/aman', 'b', 'c'));                    // //    C:\aman\b\c



console.log(path.join('/a', '/b', '/c'));   //   \a\b\c
console.log(path.join('/a', '/b', 'c'));    //   \a\b\c
console.log(path.join('/a', 'b', 'c'));     //   \a\b\c
console.log(path.join('a', 'b', 'c'));      //   a\b\c
console.log(path.join('\a', '/78b', 'c'));  //   a\78b\c
console.log(path.join('\a', 'b', 'c'));      //   a\b\c


console.log(__dirname)

