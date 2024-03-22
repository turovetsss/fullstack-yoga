const Router=require('express');
const router=new Router();
const LessonController = require('../controllers/LessonController')
const checkRole=require('../middleware/checkRoleMiddleware')
router.post('/',checkRole('ADMIN'),LessonController.create)
router.get('/',LessonController.getAll)
module.exports=router