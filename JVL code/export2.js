const fs = require('fs');
 requestHandler=(req, res)=> {
    
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>form input</title></head>');
        res.write('<body><form  action="/message" method="POST"> <input type="text" name="message" placeholder="enter name"></input><input type="submit" value="submit"></input></form></body>');
        res.write('</html>');
        return res.end();
    }
    
    const body=[];
    if (req.url === '/message' && req.method === 'POST') {
        req.on('data',(chuck)=>{
            body.push(chuck)
            console.log('chunk');
            console.log(chuck);
        })
        

       return  req.on('end',()=>{
            console.log('file write completed');
            const parsedText=Buffer.concat(body).toString();
            console.log(parsedText);
            fs.writeFile('hello.txt', parsedText.split('=')[1],(err)=>{
               
                res.setHeader('Location', '/');
                res.statusCode = 302;
                return res.end();
            });
            
        })

        
       
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>node.js</title></head>');
    res.write('<body><h1>dhushyanth</h1></body>');
    res.write('</html>');
    res.end();
}

// module.exports= {
//     handler:requestHandler,
//     text:'hello everyone'
// }

// exports.handler=requestHandler;
// exports.text="hello "

module.exports.handler=requestHandler
module.exports.text="hello "