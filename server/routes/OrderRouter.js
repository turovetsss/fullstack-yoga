const Router=require('express');
const router=new Router();
const OrderController = require('../controllers/OrderController')
const checkRole=require('../middleware/checkRoleMiddleware')
router.post('/',checkRole('ADMIN'),OrderController.create)
router.get('/',OrderController.getAll)
module.exports=router