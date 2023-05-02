import React from 'react';
import {roomAPI} from "../services/RoomService";

const Rooms: React.FC = () => {
    const {data: rooms } = roomAPI.useFetchAllRoomsQuery('')
    return (
        <div>
            {rooms && rooms.map(room =>
                <div>{room.room_name }</div>)}
        </div>
    );
};

export default Rooms;