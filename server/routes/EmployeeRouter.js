const Router=require('express');
const router=new Router();
const EmployeeController = require('../controllers/EmployeeController')
router.post('/',EmployeeController.create)
router.get('/',EmployeeController.getAll)
module.exports=router