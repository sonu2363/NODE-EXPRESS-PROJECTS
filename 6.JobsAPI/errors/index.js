const customAPIError=require('./customAPIError')
const Unauthenticated=require('./unauthenticated')
const notFoundError=require('./not-found')
const badRequestError=require('./bad-request')

module.exports={
    customAPIError,
    Unauthenticated,
    notFoundError,
    badRequestError
}