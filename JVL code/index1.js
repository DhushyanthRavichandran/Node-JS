const http = require('http');
const fs = require('fs');

function requestListener(req, res) {
    
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>form input</title></head>');
        res.write('<body><form  action="/message" method="POST"> <input type="text" name="message" placeholder="enter name"></input><input type="submit" value="submit"></input></form></body>');
        res.write('</html>');
        return res.end();
    }
    //multipart/form-data  is used when a image file is to be added
    const body=[];
    if (req.url === '/message' && req.method === 'POST') {
        req.on('data',(chuck)=>{
            body.push(chuck)
            console.log('chunk');
            console.log(chuck);
        })
        //this end will happen when the chucking precess is 
        //done

       return  req.on('end',()=>{
            console.log('file write completed');
            const parsedText=Buffer.concat(body).toString();
            console.log(parsedText);
            fs.writeFileSync('hello.txt', parsedText.split('=')[1]);
            //as this is syncronous only after the abouve line 
            //exceution is finish then only the next line will be executed
            res.setHeader('Location', '/');
            res.statusCode = 302;
            return res.end();
        })

        
       
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
