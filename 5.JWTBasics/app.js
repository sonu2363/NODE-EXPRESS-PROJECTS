require('dotenv').config()
require('express-async-errors')
const express=require('express')
const app=express()
const mainRouter=require('./routes/mainRout')
const errorHandlerMiddleware=require('./middleware/error-handler')

//middlewares
app.use(express.static('./public'))
app.use(express.json())
//Above two are built in middlewares and in folder middleware 
//we have built that middleware

app.use('/api/v1',mainRouter)

app.use(errorHandlerMiddleware)

const port=process.env.PORT||3000

const start=async()=>{
    try {
        app.listen(port,()=>{
            console.log(`Server is listening on port ${port}...`)
        })
    } catch (error) {
        console.log(error)
        
    }

}
start()

//JWT means json web token