const express=require('express')
const router=express.Router()

const {loginCont,registerCont}=require('../controllers/authCont')

router.post('/register',registerCont)
router.post('/login',loginCont)

module.exports=router

