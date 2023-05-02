import RoomReducer from './RoomSlice'
import {roomAPI} from "../../services/RoomService";
export const reducers = {
    RoomReducer,
    [roomAPI.reducerPath]: roomAPI.reducer
}


