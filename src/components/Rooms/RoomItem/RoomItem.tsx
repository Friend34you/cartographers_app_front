import React, {FC, useState} from 'react';
import {IRoom} from "../../../models/IRoom";
import s from "./RoomItem.module.css"
import Modal from "../../common/Modal/Modal";
import Button from "../../common/Button/Button";
import {Link, Navigate} from "react-router-dom";
import {ROOM_ROUTE} from "../../../utils/consts";
import Input from "../../common/Input/Input";
import {roomAPI} from "../../../services/RoomService";

interface RoomItemProps {
    room: IRoom;
}

const RoomItem: FC<RoomItemProps> = ({room}) => {
    const [modalActive, setModalActive] = useState(false)
    const [enterRoom, {isSuccess}] = roomAPI.useEnterRoomMutation()
    const handleOnClickModal = () => setModalActive(true)
    const handleOnClickRoom = () => {
        console.log("Тык");
        enterRoom(room.id)
    }

    return (
        <>
            <div className={s.item}>
                <h2>{room.name}</h2>
                <p>{room.current_users} / {room.max_users}</p>
                <p>С паролем: {room.contains_password ? "Да" : "нет"}</p>
                <div>Игра стартовала? {room.is_game_started}</div>
                <div className={s.button_container}>
                    {
                        room.contains_password
                            ? <Button
                                colorType={"accept"}
                                onClick={handleOnClickModal}>
                                Войти
                            </Button>
                            :
                            <Button
                                colorType={"accept"}
                                onClick={handleOnClickRoom}>
                                Войти
                            </Button>
                    }
                    {isSuccess && <Navigate to={ROOM_ROUTE}/>}
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <h1>{room.name}</h1>
                <p>{room.current_users} / {room.max_users}</p>
                <Input type={"password"} title={"Пароль:"} placeholder={"Введите пароль..."}/>

                <Link to={ROOM_ROUTE}>
                    <Button
                        colorType={"accept"}
                        onClick={handleOnClickRoom}
                    >
                        Войти
                    </Button>
                </Link>

            </Modal>
        </>
    );
};

export default RoomItem;