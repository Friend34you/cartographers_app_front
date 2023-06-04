import {roomAPI} from "./RoomService";
import {IGame} from "../models/IGame";

export const gameAPI = roomAPI.injectEndpoints(
    {
        endpoints: (builder) => ({
            getGameTurn: builder.query<IGame, any>({
                query: () => ({
                    url: '/game'
                })
            }),
            endTurn: builder.mutation<number[][], any>({
                query: (field) => ({
                    url: '/game',
                    method: "PUT",
                    body: field,
                })
            }),
        })
    }
)

