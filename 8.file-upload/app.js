require('dotenv').config()
require('express-async-errors')

const express=require('express')
const app=express()

//database
const connectDB=require('./db/connect')

//product router
const prodcutRouter=require('./routes/productRout')

//error handler
const notFoundMiddleware=require('./middleware/notFound')
const errorHandlerMiddleware=require('./middleware/errorHandler')

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('<h1>File upload starter</h1>')
})

app.use('/api/v1/products',prodcutRouter)

//middleware
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port=process.env.PORT||3000

const start=async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>{
            console.log(`Server is listening on port ${port}...`)
        })

    } catch(error){
        console.log(error)

    }
}


start()
