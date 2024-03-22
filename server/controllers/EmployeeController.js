const uuid = require('uuid')
const{Employee}=require('../models/models')
const ApiError = require('../error/ApiError')
const path = require('path')

class EmployeeController{
  async create(req, res) {
    try{
    const {name,surname,direction} = req.body
    const{img}=req.files
    let fileName = uuid.v4() + '.jpg'
    img.mv(path.resolve(__dirname, '..','static',fileName))
    const employee = await Employee.create({name,surname,direction,img:fileName})
    return res.json(employee)
    } catch(e){
      next(ApiError.badRequest(e.message))
    }
}
  async getAll(req,res){
    const employees = await Employee.findAll()
    return res.json(employees)
  }
}

module.exports=new EmployeeController()