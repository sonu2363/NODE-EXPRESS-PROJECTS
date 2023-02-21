const express=require('express')
const app=express()
const jwt=require('jsonwebtoken')
const secretKey="secretKey";

app.get('/',(req,res)=>{
    res.json({
        message:"a simple api"
    })
})

app.post('/login',(req,res)=>{
    const user={
        id:1,
        username:"anil",
        email:"abc@test.com"
    }
    jwt.sign({user},secretKey,{expiresIn:'300s'},(err,token)=>{
        res.json(
            {
                token
            })
    })
})

function verifyToken(req,res,next){
    const bearerHeader=req.headers['authorization']
    if(typeof bearerHeader !== 'undefined'){
        const bearer=bearerHeader.split(' ')
        const token=bearer[1]
        req.token=token
        next()

    }
    else
    {
        res.send({
            result:'Token is not valid'
        })
    }

}


app.post('/profile',verifyToken,(req,res)=>{
    jwt.verify(req.token,secretKey,(err,authData)=>{
        if(err)
        {
            res.send({result:"Invalid token"})
        }else{
            res.json({
                message:"profile accessed",
                authData
            })

        }
    })

})
app.listen(5000,()=>{
    console.log('app is running on 5000 port')
})