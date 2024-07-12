const { lookupService } = require('dns');
const EventEmitter=require('events');

const customEmitter=new EventEmitter();

customEmitter.on('response',(name , id)=>{
    console.log(`data received ${name} with id ${id}`);
})

customEmitter.on('response',()=>{
    console.log(`can be some other logic`)
})

customEmitter.emit('response') 
// this will emit all. we can also pass an arguement also in
//in this
// like 
customEmitter.emit('response','jhon',34);