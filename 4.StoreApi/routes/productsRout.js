const express=require('express')
const router=express.Router()

const {getAllProducts}=require('../controllers/productsCont')

router.route('/').get(getAllProducts)


module.exports=router