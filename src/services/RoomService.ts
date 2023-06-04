import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IRoom} from "../models/IRoom";

const url = 'http://localhost:8000'
const token = localStorage.getItem("token")
export const roomAPI = createApi({
    reducerPath: 'roomAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: url,
        // credentials: "include",
        prepareHeaders: (headers) => {
            headers.set("Authorization", `Token ${token}`);
            return headers
        }
    }),
    endpoints: (builder) => ({
        fetchAllRooms: builder.query<IRoom[], any>({
            query: (limit: number = 1, page: number = 1) => ({
                url: `/rooms/?page=${1}&limit=${10}`,
            })
        }),
        fetchRoom: builder.query<IRoom, any>({
            query: () => ({
                url: `/rooms/room/`,
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
        }),
        createRoom: builder.mutation<any, any>({
            query: (body) => ({
                url: '/rooms/room/',
                method: "POST",
                body: body,
            })
        })
    })

})

