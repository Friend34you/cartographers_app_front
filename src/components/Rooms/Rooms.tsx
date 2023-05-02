import React, {useState} from 'react';
import {roomAPI} from "../../services/RoomService";
import RoomItem from "./RoomItem/RoomItem";
import Modal from "../common/Modal/Modal";

const Rooms: React.FC = () => {
    // const [modalActive, setModalActive] = useState(false)
    const {data: rooms } = roomAPI.useFetchAllRoomsQuery('')
    return (
        <div>
            {/*<button onClick={() => setModalActive(true)}>Открыть модалку</button>*/}
            {rooms && rooms.map(room =>
                <RoomItem
                    key={room.room_id}
                    room={room}
                    // setModalActive={setModalActive}
                    // modalActive={modalActive}
                />
            )}
            {/*<Modal active={modalActive} setActive={setModalActive}>*/}

            {/*</Modal>*/}
        </div>
    );
};

export default Rooms;