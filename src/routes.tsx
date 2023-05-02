import React, {FC, ReactComponentElement, ReactElement} from "react";

import {ALL_ROOMS_ROUTE, AUTH_ROUTE} from "./utils/consts";
import Rooms from "./components/Rooms/Rooms";
import Auth from "./components/Auth";


interface Routes {

    path: string;
    Component: JSX.Element
}


export const publicRoutes: Routes[] = [
    {
        path: AUTH_ROUTE,
        Component: <Auth/>,
    }
]

export const privateRoutes = [
    {
        path: ALL_ROOMS_ROUTE,
        Component: <Rooms/>,
    }
]