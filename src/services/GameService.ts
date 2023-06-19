import {roomAPI} from "./RoomService";
import {IGame} from "../models/IGame";

export const gameAPI = roomAPI.injectEndpoints(
    {
        endpoints: (builder) => ({
            getGameTurn: builder.query<IGame, any>({
                query: () => ({
                    url: '/games/game/'
                })
            }),
            endTurn: builder.mutation<number[][], any>({
                query: (field) => ({
                    url: '/games/game/',
                    method: "PUT",
                    body: field,
                })
            }),
            startGame: builder.mutation<any, void>({
                query: () => ({
                    url: '/games/game/',
                    method: "POST",
                })
            }),
        })
    }
)

