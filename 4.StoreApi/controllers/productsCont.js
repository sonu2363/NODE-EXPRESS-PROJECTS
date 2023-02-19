
const ProductMod=require('../models/prodMod')

const getAllProducts=async(req,res)=>{
    //console.log(req.query)
    const {featured,company,name,sort,fields,numericFilters}=req.query//req.query is query string
    const queryObject={}//empty object
    if(featured)
    {
        queryObject.featured=featured==='true'?true:false
    }
    if(company)
    {
        //queryObject.company={$regex:company}//regex is a property, if I write $sonu 
        //in place of regex , it doesn't work
        queryObject.company=company 
    }
    if(name)
    {
       // queryObject.name=name
       queryObject.name={$regex:name,$options:'i'}
    }
    if(numericFilters)
    {
        const operatorMap={
            '>':'$gt',
            '>=':'$gte',
            '=':'$eq',
            '<':'$lt',
            '<=':'$lte',
        }
        const regEx=/\b(<|>|>=|=|<=)\b/g
        let filters=numericFilters.replace(
            regEx,
            (match)=>`-${operatorMap[match]}-`
        )
        const options=['price','rating']
        filters=filters.split(',').forEach((item) => {
            const [field,operator,value]=item.split('-')
            if(options.includes(field))
            {
                queryObject[field]={[operator]:Number(value)}
            }
            
        });
        
    }
    console.log(queryObject)

    //const products=await ProductMod.find(queryObject)
    //const products=await ProductMod.find({}).sort('name')




//let products=await ProductMod.find(queryObject).sort() //This is not possible to do becuase we can't 
//sort and take products from user at the same time when user is doing input of what to sort
//e.g-sort('name') 

   let result=ProductMod.find(queryObject)
    //sort
    if(sort)
    {
        const sortList=sort.split(',').join(' ')
        result=result.sort(sortList)
    }
    else{
        result=result.sort('createdAt')
    }

    if(fields)
    {
        const fieldList=fields.split(',').join(' ')
        result=result.select(fieldList)
    }
    const page=Number(req.query.page)||1
    const limit=Number(req.query.limit)||10
    const skip=(page-1)*limit//this skip thing skips the first skip elements

    result=result.skip(skip).limit(limit)

    const products=await result

    //res.status(200).json(products)
    res.status(200).json({products,nbHits:products.length})
}


module.exports={
    getAllProducts,
}