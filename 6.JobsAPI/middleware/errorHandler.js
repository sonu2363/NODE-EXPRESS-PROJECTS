const {customAPIError}=require('../errors')
const {StatusCodes}=require('http-status-codes')

const errorHandlerMiddleware=(err,req,res,next)=>{
    let customError={
        //set default
        statusCode:err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg:err.message || 'Something went wrong try again'
    }
    // if(err instanceof customAPIError){
    //     //console.log('yo')
    //     return res.status(err.statusCode).json({msg:err.message})
    // }
    if(err.name==='Validation error'){
        console.log(Object.values(err.errors))
        customError.msg=Object.values(err.errors).map((item)=>item.message).join(',')
        customError.statusCode=400
    }
    if(err.code&&err.code===11000){
        customError.msg=`Duplicate value entered for ${Object.keys(err.keyValue)} field , please choose another value`
        customError.statusCode=400
    }
    if(err.name=='CastError'){
        customError.message=`No item with id : ${err.value}`
        customError.statusCode=404
    }
    return res.status(customError.statusCode).json({msg:customError.msg})
   // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({err})
}

module.exports=errorHandlerMiddleware