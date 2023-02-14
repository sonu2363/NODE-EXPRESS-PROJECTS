const express=require('express')
const app=express()

console.log(__dirname)
app.get('/',(req,res)=>{
    console.log('user hit the resource')
    res.status(200).send('Home Page')
})

app.get('/about',(req,res)=>{
    res.status(200).send('about Page')
})

app.all('*',(req,res)=>{
   res.status(404).send('<h1>Resource not found')
})

app.listen(5000,()=>{
    console.log('Server is listening on port 5000')
})