const express=require('express')
const app=express()
const logger=require('./Logger')
// req=>middleware=>res

//app.use(logger)//app.use is used when we have to put middleware in every method present
//or else we can we have to put logger manually to every method
//Also, if we put app.use(logger)  below home route , in home there will be no logger middleware. That's why all the middlewares are at the top

app.use('/api',logger)//this will apply to any route after route api. This will not effect 
//every route


app.get('/',(req,res)=>{
    res.send('home')
})

app.get('/about',(req,res)=>{
    res.send('about')
})

app.get('/api/products',(req,res)=>{
    res.send('products')
})

app.get('/api/items',(req,res)=>{
    res.send('items')
})

app.listen(5000)