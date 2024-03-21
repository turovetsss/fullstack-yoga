const Router=require('express');
const router=new Router();
const LessonController = require('../controllers/LessonController')
router.post('/',LessonController.create)
router.get('/',LessonController.getAll)
module.exports=router