import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes";
import {ALL_ROOMS_ROUTE, ROOM_ROUTE} from "../utils/consts";

const AppRouter = () => {
    return (
        <Routes>
            {privateRoutes.map(({path, Component }) =>
            <Route key={path} path={path} element={Component}/>)}
            <Route
                path="*"
                element={<Navigate to={`${ALL_ROOMS_ROUTE}`} />}
            />
        </Routes>
    );
};

export default AppRouter;