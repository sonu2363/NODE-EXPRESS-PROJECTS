const express=require('express')
const app=express()
const morgan=require('morgan')
const logger=require('./Logger')
const authorize=require('./authorize')
//req=>middleware=>res

//app.use([authorize,logger])
//If there are multiple middleware functions , then first in the array will be executed
//first like in this array authorize will be executed first

//Very Important point:logger and authorize are own created middlewares
//express.static() is an inbuilt middleware to serve static files
//third party middleware is morgan

app.use(morgan('tiny'))

app.get('/',(req,res)=>{
    res.send('Home')
})

app.get('/about',(req,res)=>{
    res.send('About')
})

app.get('/api/products',(req,res)=>{
    res.send('products')
})

app.get('/api/items',(req,res)=>{
   console.log(req.user)
    res.send('Items')
})

//this is the way to add two middlewares manually
// app.get('/api/items',[authorize,logger],(req,res)=>{
//    console.log(req.user)
//     res.send('Items')
// })

app.listen(5000)
