import {roomAPI} from "./RoomService";

export const authAPI = roomAPI.injectEndpoints(
    {
        endpoints: (builder) => ({
            registration: builder.mutation<object, any>({
                query: (userData) => ({
                    url: 'auth/users/',
                    method: "POST",
                    body: userData
                })
            }),
            authorization: builder.mutation<{auth_token: string}, any>({
                query: (userData) => ({
                    url: 'auth/token/login/',
                    method: "POST",
                    body: userData
                })
            }),
        })
    }
)

