const {StatusCodes}=require('http-status-codes')

const customApiError=require('./cutsomApiError')

class UnauthenticatedError extends customApiError{
    constructor(message){
        super(message)
        this.StatusCodes=StatusCodes.UNAUTHORIZED
    }
}

module.exports=UnauthenticatedError