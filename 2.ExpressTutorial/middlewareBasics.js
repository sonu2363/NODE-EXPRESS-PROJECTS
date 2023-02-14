const express=require('express')
const app=express()

//req => middleware =>res

const logger=(req,res,next)=>{
    const method=req.method
    const url=req.url
    const time=new Date().getFullYear()
    console.log(method,url,time)
    //res.send("Testing")//If we do not put res here, we should put next so that program
    //runs and stop the refreshing error
    next()//Either put res or next
}

app.get('/',logger,(req,res)=>{
    const method=req.method
    const url=req.url
    const time=new Date().getFullYear()
    console.log(method,url,time)
    res.send('home')
})

app.get('/about',logger,(req,res)=>{
    res.send("About")
})

app.listen(5000,()=>{
    console.log("Server is running on the port 5000")
})