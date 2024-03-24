import {makeAutoObservable} from "mobx";

export default class ScheduleStudio {
    constructor() {
        this._lesson = [
          {id:1,timestart:'12/12/13',direction:'хатха йога'},
          {id:2,timestart:'12/12/13',direction:'хатха йога'}
        ]
        this._employee=[
          {id:1,name:"NAME",surname:"Surname",img:'img',direction:"direction"},
          {id:2,name:"NAME2",surname:"Surname2",img:'img',direction:"direction2"}
        ]
        this._order=[
          {id:1,price:'12',lesson:"Урок 1"},
          {id:2,price:'12',lesson:"Урок 2"}
        ]
        makeAutoObservable(this)
    }

    setLesson(lessons) {
        this._lessons = lessons
    }
    setEmployee(employees) {
        this._employees = employees
    }
    setOrder(orders) {
      this._orders = orders
  }


    get lessons() {
        return this._lessons
    }
    get employees() {
      return this._employee
  }
  get orders() {
    return this._orders
}
   
}