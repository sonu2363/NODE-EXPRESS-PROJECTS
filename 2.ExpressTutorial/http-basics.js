const http=require('http')




const server=http.createServer((req,res)=>{
    const url=req.url
    console.log(req.url)
    //Home Page
    if(url=='/')
    {
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>home page</h1>')
        res.end()
    }
    //About page
    else if(url=='/about')
    {
        
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>About page</h1>')
        res.end()
    }
    //404 Page
    else
    {
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>Page Not found</h1>')
        res.end()

    }
  
})

server.listen(5000)