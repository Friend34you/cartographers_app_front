import {roomAPI} from "./RoomService";
import {IGame} from "../models/IGame";

export const gameAPI = roomAPI.injectEndpoints(
    {
        endpoints: (builder) => ({
            startGame: builder.mutation<any, void>({
                query: () => ({
                    url: '/games/game/',
                    method: "POST",
                })
            }),
            getGameTurn: builder.query<IGame, any>({
                query: () => ({
                    url: '/games/game/'
                })
            }),
            endTurn: builder.mutation<number[][], any>({
                query: (field) => ({
                    url: '/games/move/',
                    method: "PUT",
                    body: field,
                })
            }),
            checkNewTurn: builder.mutation<any, void>({
                query: () => ({
                    url: '/games/move/',
                    method: "GET",
                })
            }),
            leaveGame: builder.mutation<any, void>({
                query: () => ({
                    url: '/games/leave/',
                    method: 'DELETE',
                })
            }),
        })
    }
)

