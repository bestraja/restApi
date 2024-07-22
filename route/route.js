const express=require('express')

const router=express.Router()
const usercontroller=require("../controlleur/controluser")
router.post('/register',controluser.register)
router.get('/',controluser.getprsonne)
router.patch('/:id',controluser.updatepersonne)
router.delete('/:id',IsAdmin,controluser.removepersonne)
module.exports=router