const Router = require('express');
const router=new Router();
const BasketRouter = require('./BasketRouter')
const EmployeeRouter = require('./EmployeeRouter')
const LessonRouter = require('./LessonRouter')
const OrderRouter = require('./OrderRouter')
const UserRouter = require('./UserRouter')

router.use('/user',UserRouter)
router.use('/basket',BasketRouter)
router.use('/employee',EmployeeRouter)
router.use('/lesson',LessonRouter)
router.use('/order',OrderRouter)

module.exports=router