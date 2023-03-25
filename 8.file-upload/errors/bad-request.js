const {StatusCodes}=require('http-status-codes')

const customApiError=require('./cutsomApiError')

class badRequestError extends customApiError{
    constructor(message){
        super(message)
        this.StatusCodes=StatusCodes.BAD_REQUEST
    }
}

module.exports=badRequestError