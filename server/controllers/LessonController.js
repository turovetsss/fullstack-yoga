const{Lesson}=require('../models/models')
const ApiError = require('../error/ApiError')



class LessonController{
  async create(req, res) {
    const {direction,timestart} = req.body
    const lesson = await Lesson.create({direction,timestart})
    return res.json(lesson)
}
  async getAll(req,res){
    const lessons = await Lesson.findAll()
    return res.json(lessons)
  }

}

module.exports=new LessonController()