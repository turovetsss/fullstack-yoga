const Router=require('express');
const router=new Router();
const EmployeeController = require('../controllers/EmployeeController')
const checkRole=require('../middleware/checkRoleMiddleware')
router.post('/',checkRole('ADMIN'),EmployeeController.create)
router.get('/',EmployeeController.getAll)
module.exports=router