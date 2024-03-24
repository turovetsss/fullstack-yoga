import React, {useContext} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {authRoutes, publicRoutes} from "../routes";
import {SCHEDULE_ROUTE} from "../utils/consts";
import {Context} from "../index";
export const AppRouter = () => {
    const {user} = useContext(Context) //авториз юзер или нет, получаем переменную из UserStore
    return (
        <Routes>
        
            {user.isAuth && authRoutes.map(({path, Component})=> //оживление роутинга для массива авторизованного пользователя, пробегаем по массиву ->
                <Route key = {path} path={path} element={<Component/>} exact/>//->достаем из объкта путь(path или url) и компонент(Страницу по этому адресу) -> для каждого элемента массива мы отрисовывем путь и компонент
            )}

            {publicRoutes.map(({path, Component})=> //оживление роутинга для массива не авторизованного пользователя, пробегаем по массиву ->
                <Route key = {path} path={path} element={<Component/>} exact/>//->достаем из объкта путь и компонент -> для каждого элемента массива мы отрисовывем путь и компонент
            )}

            <Route //если не отрабатывает ни один редирект - отрабатывет последний
                path="*"
                element={<Navigate to={SCHEDULE_ROUTE} replace />}
            />

        </Routes>
    );
};
