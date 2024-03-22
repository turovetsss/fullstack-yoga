const{Order} = require('../models/models')
const ApiError = require('../error/ApiError')

class OrderController{
  async create(req,res){
      const {price,lesson} = req.body
      const order = await Order.create({price,lesson})
      return res.json(order)
  }
  async getAll(req,res){
    const orders = await Order.findAll()
    return res.json(orders)
  }
  async getOne(req,res){
    res.json('hui')
  }

}

module.exports=new OrderController()