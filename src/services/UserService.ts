import {roomAPI} from "./RoomService";
import {ICurrentUser} from "../models/ICurrentUser";

export const userAPI = roomAPI.injectEndpoints(
    {
        endpoints: (builder) => ({
            fetchUserData: builder.query<ICurrentUser, any>({
                query: () => ({
                    url: 'auth/users/me/',
                })
            }),
        })
    }
)

