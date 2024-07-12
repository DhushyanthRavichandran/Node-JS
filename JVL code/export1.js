const http = require('http');

const route=require('./export2');
console.log(route.text);
console.log("hello")
const server = http.createServer(route.handler);
const port = 3001;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
