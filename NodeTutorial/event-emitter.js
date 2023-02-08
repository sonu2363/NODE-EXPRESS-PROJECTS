const EventEmitter=require('events')

const customEmitter=new EventEmitter()


customEmitter.on('response',()=>{
    console.log('some other logic here')
})

customEmitter.on('response',(name,id)=>{
    console.log(`data received user ${name} with id: ${id}`)
})


customEmitter.emit('response','john',34)
