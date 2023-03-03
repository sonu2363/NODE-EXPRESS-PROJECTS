const {StatusCodes}=require('http-status-codes')

const customAPIError=require('./customAPIError')

class badRequestError extends customAPIError{
    constructor(message)
    {
        super(message)
        this.statusCode=StatusCodes.BAD_REQUEST
    }
}

module.exports=badRequestError