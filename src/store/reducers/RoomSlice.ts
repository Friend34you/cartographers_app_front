import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface RoomState {
    name: string;
    password?: string;
}

const initialState: RoomState = {
    name: 'bibs',
    password: 'boba'
}

export const roomSlice = createSlice(
    {
        name: 'room',
        initialState,
        reducers: {
            changeName(state, action: PayloadAction<string>) {
                state.name = action.payload
            },
        }

    }
)

export default roomSlice.reducer;
