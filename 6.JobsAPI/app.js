require('dotenv').config()
require('express-async-errors')

//extra security packages
const helmet=require('helmet')
const cors=require('cors')
const xss=require('xss-clean')
const rateLimiter=require('exress-rate-limit')

//Swagger
const swaggerUI=require('swagger-ui-express')


const express=require('express')
const app=express()
//routers
const authRoutes=require('./routes/authRoute')
const jobsRoutes=require('./routes/jobsRoute')
//error-handler
const notFoundMiddleware=require('./middleware/notFound')
const errorHandlerMidlleware=require('./middleware/errorHandler')
const authMiddleware=require('./middleware/authentication')

//extra package
app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(xss())
app.use(rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
}))

//connectDB
const connectDB=require('./db/connect')



//routes
app.use('/api/v1/auth',authRoutes)
app.use('/api/v1/jobs',authMiddleware,jobsRoutes)


//error handler
app.use(errorHandlerMidlleware)
app.use(notFoundMiddleware)





const port=process.env.PORT||3000

const start=async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`server is listening on port ${port}`))
        
    } catch (error) {
        console.log(error)
    }
}
start()