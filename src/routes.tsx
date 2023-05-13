import {ALL_ROOMS_ROUTE, AUTH_ROUTE, GAME_ROUTE, ROOM_ROUTE} from "./utils/consts";
import Rooms from "./components/Rooms/Rooms";
import Auth from "./components/Auth/Auth";
import Room from "./components/Rooms/Room/Room";
import GameTable from "./components/GameTable/GameTable";


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
    },
    {
        path: ROOM_ROUTE + ":id",
        Component: <Room/>
    },
    {
        path: GAME_ROUTE,
        Component: <GameTable/>
    }
]