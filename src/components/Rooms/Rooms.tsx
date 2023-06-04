import React, {useRef, useState} from 'react';
import {roomAPI} from "../../services/RoomService";
import RoomItem from "./RoomItem/RoomItem";
import Navbar from "../Navbar/Navbar";
import s from "./Rooms.module.css"
import useScroll from "../../hooks/useScroll";

const Rooms: React.FC = () => {
    const parentRef = useRef<HTMLInputElement>(null);
    const childRef = useRef<HTMLInputElement>(null);

    const [page, setPage] = useState(1)
    const {data: rooms, isLoading, isError, isSuccess} = roomAPI.useFetchAllRoomsQuery("", {
        pollingInterval: 10000,
        refetchOnMountOrArgChange: true
    })
    // useScroll(parentRef, childRef, () => {
    //     setPage(prev => prev + 1)
    // })

    if (isSuccess) console.log(rooms)
    return (
        <div>
            <div ref={parentRef} className={s.rooms_container}>
                {isLoading && <div className={s.loading}>Загрузка...</div>}
                {isError && <div className={s.error}>ОШИБКА</div>}
                {rooms && rooms.map(room =>
                    <RoomItem
                        key={room.id}
                        room={room}
                    />
                )
                }
                {/*<div ref={childRef} style={{width: '100vw', height: "20px", backgroundColor: "green"}}></div>*/}
            </div>
        </div>
    );
};

export default Rooms;