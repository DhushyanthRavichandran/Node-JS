const http = require('http');
const fs = require('fs');

function requestListener(req, res) {
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers);
    // process.exit();
    // res.setHeader('content-type','text/html');
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>form input</title></head>');
        res.write('<body><form enctype="multipart/form-data" action="/message" method="POST"> <input type="file" name="fil"><input type="text" name="message" placeholder="enter name"></input><input type="submit" value="submit"></input></form></body>');
        res.write('</html>');
        return res.end();
    }
    //multipart/form-data  is used when a image file is to be added

    if (req.url === '/message' && req.method === 'POST') {
        req.on('data',(chuck)=>{
            console.log('chunk');
            console.log(chuck);
        })
        fs.writeFileSync('hello.txt', 'hello vathiyare');
        res.setHeader('Location', '/');
        res.statusCode = 302;
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>node.js</title></head>');
    res.write('<body><h1>dhushyanth</h1></body>');
    res.write('</html>');
    res.end();
}

const server = http.createServer(requestListener);
const port = 3001;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
