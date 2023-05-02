import React, {FC, useState} from 'react';
import {IRoom} from "../../../models/IRoom";
import roomStyle from "./RoomItem.module.css"
import Modal from "../../common/Modal/Modal";

interface RoomItemProps {
    room: IRoom;
    // modalActive: boolean;
    // setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const RoomItem: FC<RoomItemProps> = ({room}) => {
    const [modalActive, setModalActive] = useState(false)
    const onClickModalHandler = () => setModalActive(true)
    const onClickRoomHandler = () => console.log("Тык")

    return (
        <>
            <div className={roomStyle.item}>
                <p>{room.room_name}</p>
                <p>{room.current_users} / {room.max_users}</p>
                <button onClick={room.contains_password
                    ? onClickModalHandler
                    : onClickRoomHandler}>
                    Войти
                </button>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <h1>{room.room_name}</h1>
                <p>{room.current_users} / {room.max_users}</p>
                <p>Введите пароль:</p>
                <input type="password"/>
            </Modal>
        </>
    );
};

export default RoomItem;