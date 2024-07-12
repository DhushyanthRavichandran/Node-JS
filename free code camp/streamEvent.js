const {createReadStream}=require('fs')

const stream=createReadStream('./content/big.txt',
    {encoding:'utf8',
    highWaterMark:90000}   
)

//encoding is for which type of encoding and the 
//highwatermark is  for the maximum bytes the data is 
//to be separated

stream.on('data',(result)=>{
    console.log(result);
})