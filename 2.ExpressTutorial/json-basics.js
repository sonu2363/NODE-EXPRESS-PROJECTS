const express=require('express')

const app=express()

const {products}/*this syntax because we are importing objects*/=require('./data')

app.get('/',(req,res)=>{
    res.json(products)
})

app.listen(5000,()=>{
    console.log('Server is listening on port 5000')
})