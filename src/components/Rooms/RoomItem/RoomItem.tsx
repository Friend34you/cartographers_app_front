import React, {FC, useState} from 'react';
import {IRoom} from "../../../models/IRoom";
import roomStyle from "./RoomItem.module.css"
import Modal from "../../common/Modal/Modal";
import Button from "../../common/Button/Button";
import {Link} from "react-router-dom";
import {ROOM_ROUTE} from "../../../utils/consts";
import Input from "../../common/Input/Input";

interface RoomItemProps {
    room: IRoom;
}

const RoomItem: FC<RoomItemProps> = ({room}) => {
    const [modalActive, setModalActive] = useState(false)
    const handleOnClickModal = () => setModalActive(true)
    const handleOnClickRoom = () => console.log("Тык")

    const onClick = room.contains_password
        ? handleOnClickModal
        : handleOnClickRoom

    return (
        <>
            <div className={roomStyle.item}>
                <h2>{room.room_name}</h2>
                <p>{room.current_users} / {room.max_users}</p>
                <p>С паролем: {room.contains_password ? "Да" : "нет"}</p>
                <div className={roomStyle.button_container}>
                    {
                        room.contains_password
                            ? <Button
                                colorType={"accept"}
                                onClick={onClick}>
                                Войти
                            </Button>
                            : <Link to={ROOM_ROUTE + room.room_id}>
                                <Button
                                    colorType={"accept"}
                                    onClick={onClick}>
                                    Войти
                                </Button>
                            </Link>
                    }

                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <h1>{room.room_name}</h1>
                <p>{room.current_users} / {room.max_users}</p>
                <Input type={"password"} title={"Пароль:"} placeholder={"Введите пароль..."}/>

                <Link to={ROOM_ROUTE + room.room_id}>
                    <Button
                        colorType={"accept"}>
                        Войти
                    </Button>
                </Link>

            </Modal>
        </>
    );
};

export default RoomItem;