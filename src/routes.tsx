import {ALL_ROOMS_ROUTE, AUTH_ROUTE, GAME_ROUTE, ROOM_ROUTE} from "./utils/consts";
import AuthPage from "./components/Auth/AuthPage";
import Room from "./components/Rooms/Room/Room";
import GameTable from "./components/GameTable/GameTable";
import RoomsPage from "./components/Rooms/RoomsPage";


interface Routes {
    path: string;
    Component: JSX.Element
}


export const publicRoutes: Routes[] = [
    {
        path: AUTH_ROUTE,
        Component: <AuthPage/>,
    }
]

export const privateRoutes = [
    {
        path: ALL_ROOMS_ROUTE,
        Component: <RoomsPage/>,
    },
    {
        path: ROOM_ROUTE,
        Component: <Room/>
    },
    {
        path: GAME_ROUTE,
        Component: <GameTable/>
    }
]