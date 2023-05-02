import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IComment} from "../models/IComment";

const url = 'https://jsonplaceholder.typicode.com'

export const roomAPI = createApi({
    reducerPath: 'roomAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: url
    }),
    endpoints: (builder) => ({
        fetchAllRooms: builder.query<IComment[], any>({
            query: () => ({
                url: '/comments'
            })
        })
    })

})

