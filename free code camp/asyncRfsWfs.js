const {readFile,writeFile}=require('fs');
readFile('./content/first.txt',(err,result)=>{
    if(err) {
        console.log(err);
        return;
    }
    const first=result;
    readFile('./content/second.txt',(err,result)=>{
        if(err) {
            console.log(err);
            return;
        }
        const second=result;
    writeFile(
        './content/result-async.txt',
        `here is the result of asnyc result : ${first}:${second}`,
        (err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(result);
        }
    )
    })
})
