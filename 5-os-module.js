var os=require("os");

// destructuring a particular method from os modules
var {version}=require('os');

// info about current user
console.log(os.userInfo());

// method returns the system uptime in seconds
console.log(os.uptime())

const currentOS={
    name:os.type(),
    release:os.release(),
    totalMemory:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOS);

