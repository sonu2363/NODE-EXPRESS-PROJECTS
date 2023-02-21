require('dotenv').config()
//require('express-async-errors')//this will replace error handling middlewares that
// is used in 03.Task API and also acts as a async wrapper used in "Task API"
const express=require('express')
const app=express()
const connectDB=require('./db/connect')
const productRoutes=require('./routes/productsRout')




app.get('/',(req,res)=>{
    res.status(200).send('home page')
})

app.use('/api/v1/products',productRoutes)



const port=process.env.PORT||3000

const start=async()=>{
  
    try {
  
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>{console.log('Server running')})
        
    } catch (error) {
        
    }
}
start()
