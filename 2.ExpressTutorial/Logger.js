const logger=(req,res,next)=>{
    const method=req.method
    const url=req.url
    const time=new Date().getFullYear()
    console.log(method,url,time)
    //res.send("Testing")//If we do not put res here, we should put next so that program
    //runs and stop the refreshing error
    next()//Either put res or next
}

module.exports=logger