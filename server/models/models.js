const sequelize=require('../db');
const {DataTypes}=require('sequelize')

const User = sequelize.define('user',{
  id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
  email:{type:DataTypes.STRING,unique:true,},
  password:{type:DataTypes.STRING},
  role:{type:DataTypes.STRING,defaultValue:"USER"}
})
const Order = sequelize.define('order',{
  id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
  price:{type:DataTypes.INTEGER,allowNull:false},
  lesson:{type:DataTypes.STRING,defaultValue:"USER"}
}) 
const Basket= sequelize.define('basket',{
  id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
})
const Lesson = sequelize.define('lesson',{
  id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
  timestart:{type:DataTypes.STRING,allowNull:false},
  direction:{type:DataTypes.STRING,allowNull:false},
}) 
const Employee = sequelize.define('employee',{
  id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
  name:{type:DataTypes.STRING,allowNull:false},
  surname:{type:DataTypes.STRING,allowNull:false},
  img:{type:DataTypes.STRING,allowNull:false},
  direction:{type:DataTypes.STRING,allowNull:false},
}) 

Employee.hasMany(Lesson)
Lesson.belongsTo(Employee)

User.hasOne(Basket)
Basket.belongsTo(User);

Basket.hasMany(Order);
Order.belongsTo(Basket);

module.exports={
  User,Basket,Lesson,Employee,Order
}