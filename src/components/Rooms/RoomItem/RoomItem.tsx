import React, {FC, useState} from 'react';
import {IRoom} from "../../../models/IRoom";
import roomStyle from "./RoomItem.module.css"
import Modal from "../../common/Modal/Modal";
import Button from "../../common/Button/Button";
import {Link} from "react-router-dom";
import {ROOM_ROUTE} from "../../../utils/consts";

interface RoomItemProps {
    room: IRoom;
    // modalActive: boolean;
    // setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const RoomItem: FC<RoomItemProps> = ({room}) => {
    const [modalActive, setModalActive] = useState(false)
    const onClickModalHandler = () => setModalActive(true)
    const onClickRoomHandler = () => console.log("Тык")

    const onClick = room.contains_password
        ? onClickModalHandler
        : onClickRoomHandler

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
                                type={"accept"}
                                onClick={onClick}>
                                Войти
                            </Button>
                            : <Link to={ROOM_ROUTE + room.room_id}>
                                <Button
                                    type={"accept"}
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
                <p>Введите пароль:</p>
                <input type="password"/>
                <Link to={ROOM_ROUTE + room.room_id}>
                    <Button
                        type={"accept"}>
                        Войти
                    </Button>
                </Link>
            </Modal>
        </>
    );
};

export default RoomItem;