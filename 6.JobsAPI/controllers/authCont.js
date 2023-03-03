const User=require('../models/userModel')
const {StatusCodes}=require('http-status-codes')
// const jwt=require('jsonwebtoken')
const {badRequestError,Unauthenticated}=require('../errors')
//const bcrypt=require('bcrypt')

const registerCont=async(req,res)=>{
    
   
    //Validator check in controller
    //const {name,email,password}=req.body
    // if((!name) || (!email) || (!password)){
    //     throw new badRequestError('please provide name , email and password')
    //     //Because of express async errors package , I am able to send 
    //     //this as res . Without this package the error reflects on console
    //const user=await User.create({...req.body})
    // }

    //Validator check with the help of hashing in controller witout mongoose middleware
    // const {name,email,password}=req.body
    // console.log(req.body)
    // const salt=await bcrypt.genSalt(10)
    // const hashedPassword=await bcrypt.hash(password,salt)
    // const tempUser={name,email,password:hashedPassword}
    // const user=await User.create({...tempUser})
    
    const user=await User.create({...req.body})
    //  const token=jwt.sign({userId:user._id,name:user.name},'jwtSecret',{expiresIn:'30d'})
    const token=user.createJWT()
    res.status(StatusCodes.CREATED).json({user:{name:user.name},token})
    // res.status(StatusCodes.CREATED).json({user:{name:user.getName()},token})
}

const loginCont=async(req,res)=>{
    const {email,password}=req.body
  //  console.log(req.body)
  if(!email || !password)
  {
      throw new badRequestError('please provide email and password')
    }
    const user=await User.findOne({email})
    if(!user)
    {
        throw new Unauthenticated('Invalid credentials')
    }
    //compare password
    console.log(password)
    const isPasswordCorrect=await user.comparePassword(password)
    console.log('yo')
    if(!isPasswordCorrect)
    {
        throw new Unauthenticated('Invalid credentials')
    }
    

    const token=user.createJWT()
    res.status(StatusCodes.OK).json({user:{name:user.name},token})
}

module.exports={
    registerCont,
    loginCont
}

