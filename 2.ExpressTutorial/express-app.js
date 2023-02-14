const express=require('express')
const path =require('path')

const app=express()

//setup static and middleware
app.use(express.static('./public'))
//In express , express.static() is inbuilt middleware to server static files 
//but public has to be created and static files should be put into it


app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./NavBarApp/index.html'))
})

app.all('*',(req,res)=>{
    res.status(404).send('resource not found')
})

app.listen(5000,()=>{
    console.log('Server is listening on port 5000')
})