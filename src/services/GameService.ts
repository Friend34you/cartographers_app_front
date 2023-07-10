import {roomAPI} from "./RoomService";
import {IGame} from "../models/IGame";
import {IPlayerGameResult} from "../models/IPlayerGameResult";
import {IGameEnd} from "../models/IGameEnd";

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
            // checkNewTurn: builder.mutation<boolean, void>({
            //     query: () => ({
            //         url: '/games/move/',
            //         method: "GET",
            //     })
            // }),
            checkGameStatus: builder.mutation<string, void>({
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
            getGameEnd: builder.query<IGameEnd, any>({
                query: () => ({
                    url: '/games/results/',
                })
            })
        })
    }
)

