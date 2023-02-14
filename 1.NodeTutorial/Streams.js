const http=require('http')
const fs=require('fs')


const server=http.createServer((req,res)=>{
    // if(req.url=='/')
    // {
    //     return res.end();
    // }

    // const file=fs.readFileSync('sample.txt')
    // return res.end(file)    bad way to send a big file (or dowloading a big file in a bad way from server)

    // const readableStream=fs.createReadStream('sample.txt')
    // readableStream.pipe(res) //good way to send a big file (or downloading a big file in a good way from server)


    //Copy big files in a bad way 
// const file=fs.readFileSync('sample.txt')
// fs.writeFileSync('output.txt',file)
// res.end()

//copy big files in a good way
const readStream=fs.createReadStream('./content/sample.txt')
const writeStream=fs.createWriteStream('./output.txt')
// readStream.on('data',(chunk)=>{
//     console.log('Chunk:',chunk)//console without converting to string
//     writeStream.write(chunk)
// })
readStream.on('data',(chunk)=>{
    console.log('Chunk:',chunk.toString())//console with converting to string
    writeStream.write(chunk)
})

res.end()  
})

const PORT=process.env.PORT || 5700;

server.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})