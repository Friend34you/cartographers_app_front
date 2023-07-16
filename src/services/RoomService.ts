import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IRoom} from "../models/IRoom";
// 'http://25.44.215.12:8000'
const url = 'http://localhost:8000'

export const roomAPI = createApi({
    reducerPath: 'roomAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: url,
        // credentials: "include",
        prepareHeaders: (headers) => {
            localStorage.getItem("token") && headers.set("Authorization", `Token ${localStorage.getItem("token")}`);
            return headers
        }
    }),
    tagTypes: ['UserList'],
    endpoints: (builder) => ({
        fetchAllRooms: builder.query<IRoom[], number>({
            query: (page: number = 1, limit: number = 10) => ({
                url: `/rooms/`,
                params: {
                    page,
                    limit
                }
            })
        }),
        fetchRoom: builder.query<IRoom, any>({
            query: () => ({
                url: `/rooms/room/`,
            }),
            providesTags: ['UserList']
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
        }),
        enterRoom: builder.mutation<any, number>({
            query: (room_id) => ({
                url: '/rooms/user/',
                method: "PUT",
                body: {
                    room_id,
                },
                invalidatesTags: ['UserList']
            })
        }),
        leaveRoom: builder.mutation<any, void>({
            query: () => ({
                url: '/rooms/leave/',
                method: 'DELETE',
            })
        }),
        changeReadiness: builder.mutation<any, void>({
            query: () => ({
                url: '/rooms/ready/',
                method: 'PUT',
            })
        }),
        kickUser: builder.mutation<any, any>({
            query: (user_to_kick_id) => ({
                url: '/rooms/user/',
                method: "DELETE",
                params: {user_to_kick_id}
            }),
            invalidatesTags: ['UserList']
        }),
    })

})

