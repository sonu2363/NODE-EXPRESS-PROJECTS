const express=require('express')
const app=express()



const routPeople=require('./routes/route-people')
const routAuth=require('./routes/router-auth')

//static assets
app.use(express.static('./methods-public'))
//parse form data
app.use(express.urlencoded({extended:false}))
//parse json
app.use(express.json())

app.use('/api/people',routPeople)//This line means that use routPeople in all of /api/people routes
app.use('/login',routAuth)

app.listen(5000,()=>{
    console.log('Server is running on port 5000')
})