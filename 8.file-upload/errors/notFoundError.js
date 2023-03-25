const {StatusCodes}=require('http-status-codes')

const customApiError=require('./cutsomApiError')

class notFoundError extends customApiError{
    constructor(message){
        super(message)
        this.StatusCodes=StatusCodes.NOT_FOUND
    }
}

module.exports=notFoundError