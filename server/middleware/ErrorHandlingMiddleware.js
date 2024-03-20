const ApiError =require('../error/ApiError');


module.exports=function(err,req,res,next){
  if(err instanceof ApiError ){
    return res.status(res.status).json({message:err.message})
  }
  return res.status(500).json({message:"Неизвестная Ошибка!"})
}

