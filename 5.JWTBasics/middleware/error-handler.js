//const customAPIError=require('../errors/customError')//to take the file
const {customAPIError}=require('../errors')//to take file from folder
const {StatusCodes}=require('http-status-codes')

const errorHandlerMiddleware=(err,req,res,next)=>{
    if(err instanceof customAPIError)
    {
        return res.status(err.statusCode).json({msg:err.message})
    }
    return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send('Something went wrong try again later')
}
module.exports=errorHandlerMiddleware

