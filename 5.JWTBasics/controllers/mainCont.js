
const {badRequest}=require('../errors')
const jwt=require('jsonwebtoken')

const login=async(req,res)=>{
    const {username,password}=req.body
   // console.log(req.body)

    if(!username || !password)
    {
        console.log('1')
        throw new badRequest('please provide email and password',404)
    }
//just for demo, normally provided by DB
    const id=new Date().getDate()
    console.log('2')

    //try to keep payload small, better experience for user
    const token=jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})
   
    
    console.log(username,password)
    res.status(200).json({msg:'user created',token})
}

const dashboard=async(req,res)=>{
        console.log(req.user)
        const luckyNumber=Math.floor(Math.random()*100)
        res.status(200).json({msg:`Hello, ${req.user.username}`,secret:`Here is your authorized data,
        your lucky number is ${luckyNumber}`})
   
   
}

module.exports={
    login,
    dashboard
}