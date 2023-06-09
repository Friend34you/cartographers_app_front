import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {reducers} from "./reducers/reducers";
import {roomAPI} from "../services/RoomService";


const rootReducer = combineReducers(reducers);

export const setupStore = () => configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        roomAPI.middleware
    ),
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']