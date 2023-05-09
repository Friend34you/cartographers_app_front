import React, {useRef, useState} from 'react';
import {roomAPI} from "../../services/RoomService";
import RoomItem from "./RoomItem/RoomItem";
import Modal from "../common/Modal/Modal";
import Navbar from "../Navbar/Navbar";
import navbarStyle from "./Rooms.module.css"
import useScroll from "../../hooks/useScroll";

const Rooms: React.FC = () => {
    const parentRef = useRef<HTMLInputElement>(null);
    const childRef = useRef<HTMLInputElement>(null);

    const [page, setPage] = useState(1)
    const {data: rooms, isLoading} = roomAPI.useFetchAllRoomsQuery("", {
        pollingInterval: 10000,
    })
    useScroll(parentRef, childRef, () => {
        setPage(prev => prev + 1)
    })
    return (
        <>
            {/*<button onClick={() => setModalActive(true)}>Открыть модалку</button>*/}
            <Navbar/>
            <div ref={parentRef} className={navbarStyle.rooms_container}>
                {/*{isLoading && <div style={{width: "100%", height: "100vh", backgroundColor: "red"}}></div>}*/}
                {rooms && rooms.map(room =>
                    <RoomItem
                        key={room.room_id}
                        room={room}
                        // setModalActive={setModalActive}
                        // modalActive={modalActive}
                    />
                )}
                <div ref={childRef} style={{width: '100vw', height: "20px", backgroundColor: "green"}}></div>
            </div>
            {/*<Modal active={modalActive} setActive={setModalActive}>*/}

            {/*</Modal>*/}
        </>
    );
};

export default Rooms;