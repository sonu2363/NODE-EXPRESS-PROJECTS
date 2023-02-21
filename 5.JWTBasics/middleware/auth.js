const jwt=require('jsonwebtoken')
const {unAuthenticated}= require('../errors')



const authenticationMiddleware=async(req,res,next)=>{
    const authHeader=req.headers.authorization
    // console.log(!authHeader)
     //console.log(authHeader)
     if((!authHeader) || (!authHeader.startsWith('Bearer ')))
     {
         throw new unAuthenticated('no token provided')
 
     }
     const token=authHeader.split(' ')[1]
     // console.log(token)
     try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        const {id,username}=decoded
        req.user={id,username}//setting req.user
        next()
        
     } catch (error) {
        throw new unAuthenticated('Not authorized to access this route')
        
     }
    console.log(req.headers.authorization)
    next()
}
module.exports=authenticationMiddleware