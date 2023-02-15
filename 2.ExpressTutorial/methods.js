const express=require('express')
const app=express()
let {people}=require('./data')

//static assets
app.use(express.static('./methods-public'))

//parse form data. express.urlencoded is built in body parser
app.use(express.urlencoded({extended:false}))

//parse json
app.use(express.json())



app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true,data:people})
    //Here we have use res.json instead of res.send because it is better to use 
    //res.json than res.send as in postman(or in page also) we receive in json format
    //it will not show error but we should send by res.json()
})

app.post('/api/people',(req,res)=>{//We experimenting this with javascript.html in 
  //methods-public
  const {name}=req.body//We are able to take out name because of express.json() middleware
  if(!name)
  {
    return res.status(400).json({success:false,msg:'please provide name value'})
  }
 // res.status(200).send('Success')//It's better to write to write res.json({})
 //here than res.send({}) 
 res.status(201).json({success:true,person:name})
})

app.post('/api/postman/people',(req,res)=>{
  const {name}=req.body
  if(!name)
  {
    return res.status(400).json({success:false,msg:'please provide name value'})
  }
  res.status(201).json({success:true,person:[...people,name]})
})

app.post('/login',(req,res)=>{//we experimented this with index.html in methods-public
 // console.log(req.body)
 const {name}=req.body
 if(name)
 {
  return res.status(200).send(`Welcome ${name}`)
 }
  res.status(401).send('Please provide credentials')
})

app.put('/api/people/:id',(req,res)=>{
  const {id}=req.params
  const {name}=req.body
  //console.log(id,name)
  const person=people.find((person)=>person.id===Number(id))
  if(!person)
  {
       return res.status(404).json({success:false,msg:'please provide name value'})
  }
  const newPeople=people.map((person)=>{
    if(person.id===Number(id))
    {
      person.name=name
    }
    return person;
  })
  res.status(200).json({success:true,data:newPeople})
 
})

app.delete('/api/people/:id',(req,res)=>{
  //console.log(req.params)this gives after ":"
  const person=people.find((person)=>person.id===Number(req.params.id))
  if(!person)
  {
    return res.status(404).json({success:false,msg:`no person with id ${req.params.id}`})
  }
   const newPeople=people.filter(
    (person)=>person.id!==Number(req.params.id)
   )
   return res.status(200).json({success:true,data:newPeople})

})

app.listen(5000,()=>{
  console.log('Server is running on 5000')
})

// app.get('/api/people',(req,res)=>{
//     res.status(200).json({success:true,data:people})
// })
  //This is the output we will get and res.json -> stringify and sends to res on the page
  // A/Q to docs  
//   "success": true,
//   "data": [
//     {
//       "id": 1,
//       "name": "john"
//     },
//     {
//       "id": 2,
//       "name": "peter"
//     },
//     {
//       "id": 3,
//       "name": "susan"
//     },
//     {
//       "id": 4,
//       "name": "anna"
//     },
//     {
//       "id": 5,
//       "name": "emma"
//     }
//   ]
// }


//GET-READ
//POST-INSERT
//PUT-UPDATE
//DELETE-DELETE