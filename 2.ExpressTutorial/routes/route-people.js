const express=require('express')
const router=express.Router()

let {people}=require('../data')

const  {createPerson,
  getPeople,
  updatePerson,
  deletePerson,
  createPersonPostman
  }=require('./controllers/contPeople')

//router.get('/',getPeople)
//router.post('/',createPerson)
//Above two lines in one lines . Another way of writing
router.route('/').get(getPeople).post(createPerson)



router.post('/postman',createPersonPostman)
//router.route('/postman').post(createPersonPostman)
  
 
  
  //router.put('/:id',updatePerson)
 // router.delete('/:id',deletePerson)
 //Above two statements can be replaced with the below line
 router.route(':/id').put(updatePerson).delete(deletePerson)

 

  module.exports=router