const customAPIError=require('./customError')
const {StatusCodes}=require('http-status-codes')



class unAuthenticated extends customAPIError{
    constructor(message)
    {
        super(message)
        this.statusCode=StatusCodes.UNAUTHORIZED
    }
}

module.exports=unAuthenticated