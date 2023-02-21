class customAPIError extends Error{//Error is an class in Node Js documentation
    constructor(message)
    {
        super(message)
       
    }
}

module.exports=customAPIError