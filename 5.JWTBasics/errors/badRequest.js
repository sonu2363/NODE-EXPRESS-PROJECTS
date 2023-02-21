const customAPIError=require('./customError')
const {StatusCodes}=require('http-status-codes')

class badRequest extends customAPIError{
    constructor(message){
        super(message)
        this.statusCode=StatusCodes.BAD_REQUEST
    }
} 

module.exports=badRequest