const jobModel=require('../models/jobModel')
const {StatusCodes}=require('http-status-codes')
const {badRequestError,notFoundError}=require('../errors')


const getAllJobs=async(req,res)=>{
    const jobs=await jobModel.find({createdBy:req.user.userId}).sort('createdAt')
    res.status(StatusCodes.OK).json({jobs,count:jobs.length})
    res.send('get all jobs')
}

const getJob=async(req,res)=>{
    const {
        user:{userId},
        params:{id:jobId},
    }=req
    const job=await jobModel.findOne({
        _id:jobId,
        createdBy:userId
    })
    if(!job)
    {
        throw new notFoundError(`no job with ${jobId}`)
    }
    res.status(StatusCodes.OK).json({job})
}

const createJob=async(req,res)=>{
    req.body.createdBy=req.user.userId
    const job=await jobModel.create(req.body)
    res.status(StatusCodes.CREATED).json({job})
   // res.json(req.user)
    // res.send('sonu')
    // res.json(req.body)
}

const updateJob=async(req,res)=>{
    console.log('update job')
    const {
        body:{company,position},
        user:{userId},
    params:{id:jobId}}=req//this line same as {req.params.id is set to jobId} 
    if(company===''||position===''){
        console.log('sonu')
        throw new badRequestError('company or position fields cannot be empty')
    }
const job=await jobModel.findByIdAndUpdate({_id:jobId,createdBy:userId},req.body,{new:true,
runValidators:true})
if(!job){
    throw new notFoundError(`No job with id ${jobId}`)
}

    res.status(StatusCodes.OK).json({job})
}


const deleteJob=async(req,res)=>{
    const {user:{userId},params:{id:jobId}}=req
    const job=await jobModel.findByIdAndRemove({
        _id:jobId,createdBy:userId
    })
    if(!job){
        throw new notFoundError(`No job with id ${jobId}`)
    }
    res.status(StatusCodes.OK).send()
}

module.exports={
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
}