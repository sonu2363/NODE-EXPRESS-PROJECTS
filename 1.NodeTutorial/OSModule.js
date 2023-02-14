
const os=require('os')
const user=os.userInfo()

const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}//currentOS is a object

//console.log(user)
//console.log(os.uptime())
console.log(currentOS)