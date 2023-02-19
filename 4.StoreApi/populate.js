require('dotenv').config()
const connectDB=require('./db/connect')
const ProductMod=require('./models/prodMod')

const jsonProducts=require('./products.json')

const start=async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        await ProductMod.deleteMany()
        await ProductMod.create(jsonProducts)
        console.log('success')
        process.exit(0)
    }
    catch(error)
    {

        console.log(error)
        process.exit(1)
    }
}

start()