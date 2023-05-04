import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IRoom} from "../models/IRoom";

const url = 'http://localhost:5000'

export const roomAPI = createApi({
    reducerPath: 'roomAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: url
    }),
    endpoints: (builder) => ({
        fetchAllRooms: builder.query<IRoom[], any>({
            query: () => ({
                url: '/rooms',
            })
        }),
        findRoom: builder.mutation<any, any>({
            query: (roomName) => ({
                url: '/rooms/search/',
                method: "GET",
                params: {
                    search_value: roomName
                }
            })
        })
    })

})

