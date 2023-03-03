const User=require('../models/userModel')
const jwt=require('jsonwebtoken')
const {Unauthenticated}=require('../errors')

const authMiddleware=async(req,res,next)=>{
    //check header
    const authHeader=req.headers.authorization
    //console.log(authHeader)
    if(!authHeader || !authHeader.startsWith('Bearer '))
    {
        throw new Unauthenticated('Authentication invalid')
    }
    const token=authHeader.split(' ')[1]
   console.log(token)
    try{
       
        console.log('yo')
        //console.log(process.env.JWT_SECRET)
        const payload=jwt.verify(token,process.env.JWT_SECRET)
        //attach the user to the job routes
       console.log(payload)

      
    
     
        req.user={userId:payload.userId,name:payload.name}
        //console.log(req.user)

         //this is anothere way of writing above one line. We are not using this because
         //there is no functionality to remove user
    //    const user=User.findById(payload.id).select('-password')
    //    req.user=user

        next()
    }
    catch(error){
        throw new Unauthenticated('Authentication invalid')
    }
}

module.exports=authMiddleware