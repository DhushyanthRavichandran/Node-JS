const os=require('os');
const user=os.userInfo();
console.log(user);
console.log( `the system uptime is ${os.uptime()}`);
const currentOS={
    name:os.type(),
    release:os.release(),
    totalMemeory:os.totalmem(),
    freeMemoery: os.freemem()
}
console.log(currentOS);