const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'please provide name'],
        minLength:1,
        maxLength:50,
    },
    email:{
        type:String,
        required:[true,'please provide email'],
        match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    'please provide email'
    ],
    unique:true,//it doesn't let you create 2 emails of same name
    },
    password:{
        type:String,
        required:[true,'please provide passwords between 6-12'],
        minLength:6,
        //maxLength:12,
    },
})
//hashing the passing using mongoose middleware
userSchema.pre('save',async function(next){
    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt)
    next()

})

// userSchema.methods.getName=function(){
//     return this.name

// }

userSchema.methods.createJWT=function(){//by this I am creating a method(or
    // function createJWT)
    return jwt.sign({userId:this._id,name:this.name},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_LIFETIME
    })
}

userSchema.methods.comparePassword=async function(candidatePassword){
       const isMatch=await bcrypt.compare(candidatePassword,this.password)
       return isMatch
}

module.exports=mongoose.model('User',userSchema)

//Hooks are simply helper functions