const express=require('express')
const router=express.Router()

const {createProduct,getAllProducts}=require('../controllers/productCont')

const {uploadProductImage}=require('../controllers/uploadCont')

router.route('/').post(createProduct).get(getAllProducts)
router.route('/uploads').post(uploadProductImage)

module.exports=router