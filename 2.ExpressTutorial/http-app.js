const http=require('http')
const {readFileSync}=require('fs')


//get all files
const homePage=readFileSync('./NavBarApp/index.html')
const homeStyles=readFileSync('./NavBarApp/styles.css')
const homeImage=readFileSync('./NavBarApp/logo.svg')
const homeLogic=readFileSync('./NavBarApp/browser-app.js')

const server=http.createServer((req,res)=>{
    const url=req.url
    console.log(req.url)
    //Home Page
    if(url=='/')
    {
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)
        res.end()
    }
    //About page
    else if(url=='/about')
    {
        
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>About page</h1>')
        res.end()
    }
    //styles
    else if(url==='/styles.css')
    {
        
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeStyles)
        res.end()
    }
    //image logo
    else if(url==='/logo.svg')
    {
        
        res.writeHead(200,{'content-type':'image/svg+xml'})
        res.write(homeImage)
        res.end()
    }
    //logic
    else if(url==='/browser-app.js')
    {
        
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(homeLogic)
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
