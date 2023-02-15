const express=require('express')
const router=express.Router()

router.post('/',(req,res)=>{//we experimented this with index.html in methods-public
    // console.log(req.body)
    const {name}=req.body
    if(name)
    {
     return res.status(200).send(`Welcome ${name}`)
    }
     res.status(401).send('Please provide credentials')
   })

module.exports=router