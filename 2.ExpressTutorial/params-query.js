const express=require('express')
const app=express()

const {products}=require('./data')

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})

app.get('/api/products',(req,res)=>{
    const newProducts=products.map((product)=>{
        const {id,name,image}=product;
        return {id,name,image}
    })
    res.json(newProducts)
})

app.get('/api/products/:productID',(req,res)=>{
   // console.log(req)
   // console.log(req.params)
   const {productID}=req.params
  // console.log(Number(productID))
    const singleProduct=products.find((product)=>product.id===Number(productID))
    if(!singleProduct)
    {
        return res.status(404).send('Product does not exist')
    }
    res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
    res.send('hello world')
})

app.get('/api/v1/query',(req,res)=>{
    const {search,limit}=req.query
    let sortedProducts=[...products]
    if(search)
    {
        sortedProducts=sortedProducts.filter((prduct)=>{
            return prduct.name.startsWith(search)
        })
    }
    if(limit)
    {
        sortedProducts=sortedProducts.slice(0,Number(limit))
           
      
    }
    if(sortedProducts.length<1)
    {
       // res.status(200).send('no products matched your search')
       return res.status(200).json({success:true,data:[]})//can use upper res also , depends on you 
    }
    res.status(200).json(sortedProducts)//Since this is the last one so it's okay to not print return
    //console.log(req.query)
  // res.send('hello world') Writing this statement gives error "Cannot set headers after they are sent to the client". The reason is we can't send more than one res for one req
})

app.listen(5000,()=>{
    console.log('Server is listening on 5000')
})