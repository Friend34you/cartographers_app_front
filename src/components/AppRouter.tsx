import React, {createContext, useState} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes";
import {ALL_ROOMS_ROUTE, AUTH_ROUTE, ROOM_ROUTE} from "../utils/routeConsts";
import {IAuthContext} from "../models/IAuthContext";
import Background from "./common/Background/Background";

export const AuthContext = createContext<Partial<IAuthContext>>({})

const AppRouter = () => {
    const [isAuthorized, setIsAuthorized] = useState(!!localStorage.getItem("token"));
    const authValue = {isAuthorized, setIsAuthorized}

    return isAuthorized
        ? (
            <AuthContext.Provider value={authValue}>
                <Routes>
                    {privateRoutes.map(({path, Component}) =>
                        <Route key={path} path={path} element={Component}/>)}
                    <Route
                        path="*"
                        element={<Navigate to={`${ALL_ROOMS_ROUTE}`}/>}
                    />
                </Routes>
                <Background/>
            </AuthContext.Provider>
        )
        : (
            <AuthContext.Provider value={authValue}>
                <Routes>
                    {publicRoutes.map(({path, Component}) =>
                        <Route key={path} path={path} element={Component}/>)}
                    <Route
                        path="*"
                        element={<Navigate to={`${AUTH_ROUTE}`}/>}
                    />
                </Routes>
                {/*<Background/>*/}
            </AuthContext.Provider>
        )
};

export default AppRouter;