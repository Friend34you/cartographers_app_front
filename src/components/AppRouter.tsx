import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes";
import {ALL_ROOMS_ROUTE, AUTH_ROUTE, ROOM_ROUTE} from "../utils/consts";

const AppRouter = () => {
    const isAuthorized = !!localStorage.getItem("token")
    return isAuthorized
        ? (
            <Routes>
                {privateRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={Component}/>)}
                <Route
                    path="*"
                    element={<Navigate to={`${ALL_ROOMS_ROUTE}`}/>}
                />
            </Routes>)
        : (
            <Routes>
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={Component}/>)}
                <Route
                    path="*"
                    element={<Navigate to={`${AUTH_ROUTE}`}/>}
                />
            </Routes>
        )
};

export default AppRouter;