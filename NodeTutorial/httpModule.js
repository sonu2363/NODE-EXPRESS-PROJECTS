const http=require('http')

//We can't use more than one res.end(),for one request . But, then also if we use return 
// we can use more than one res.end(), for a request
const server=http.createServer((req,res)=>{
    if(req.url==='/')
    {
        res.end('Welcome to our Home page')
        return
    }
    if(req.url==='/about')
    {
        res.end('Here is our short History')
        return
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    `)
})

server.listen(5000)