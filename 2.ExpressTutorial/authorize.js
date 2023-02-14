const authorize=(req,res,next)=>{
    const {user}=req.query
    //Query string parameters are after "?" in URL 
    //Each Query string is made up from a parameter and a value that
    // are joined together using an equals sign (=).
    //Multiple Query strings are joined together using an ampersand (&).
    //console.log(req.user)this will give undefined because it declared first and 
    //property of req.user is made later of this line
    if(user=='john')
    {
        req.user={name:'john',id:3}//this is setting up of property of req 
        //there is no property of req.user , we just set it and it can be used 
        
        next()
    }
    else
    {
        res.status(401).send('Unauthorized')
    }
}

module.exports=authorize