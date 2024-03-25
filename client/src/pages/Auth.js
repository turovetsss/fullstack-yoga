import React, {useContext, useState} from 'react';
import {Container, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SCHEDULE_ROUTE} from "../utils/consts";
import {NavLink,useLocation, useNavigate} from "react-router-dom";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";


export const Auth = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()//данный хук возращает нам маршрут из строки запроса


    const location = useLocation()//данный хук возращает нам маршрут из строки запроса
    const isLogin = location.pathname === LOGIN_ROUTE;//если станица логина то isLogin = true

    //состояния:
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try{
            let data;

            if (isLogin){
                data = await login(email, password);
            }else{
                data = await registration(email, password);
                //console.log(response)// ответ с токеном зарегистрированного полбзователя
            }
            user.setUser(user)
            user.setIsAuth(true)

            navigate(SCHEDULE_ROUTE)//если всё ок - переводим авторизованного юзера на главную
        } catch (e){
            document.getElementById('error').textContent = e.response.data.message
        }

    }

    return (
      <Container
      className="d-flex justify-content-center align-items-center"
      style={{height: window.innerHeight - 54}}
  >
      <Card style={{width: 600}} className="p-5">
          <h2 style={{fontWeight:"300"}}className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
          <Form className="d-flex flex-column">
              <Form.Control
                  className="mt-3"
                  placeholder="Введите ваш email..."
                  value={email}
                  onChange={e => setEmail(e.target.value)}
              />
              <Form.Control
                  className="mt-3"
                  placeholder="Введите ваш пароль..."
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  type="password"
              />
              <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
               
                  <Button
                     style={{background:"pink",border:"none"}}
                      onClick={click}
                  >
                      {isLogin ? 'Войти' : 'Регистрация'}
                  </Button>
                  {isLogin ?
                      <div>
                          Нет аккаунта? <NavLink style={{color:"lightgrey"}} to={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink>
                      </div>
                      :
                      <div>
                          Есть аккаунт? <NavLink style={{color:"lightgrey"}} to={LOGIN_ROUTE}>Войти</NavLink>
                      </div>
                  }
              </Row>

          </Form>
      </Card>
  </Container>
    );
});

export default Auth;