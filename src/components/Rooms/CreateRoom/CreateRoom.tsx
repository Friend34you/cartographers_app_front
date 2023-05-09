import React, {FC, useState} from 'react';
import Button from "../../common/Button/Button";
import createRoomStyle from "./CreateRoom.module.css"
import Input from "../../common/Input/Input";
import {roomAPI} from "../../../services/RoomService";

interface CreateRoomProps {
    setModal: Function;
}

const CreateRoom:FC<CreateRoomProps> = ({setModal}) => {
    const [title, setTitle] = useState("")
    const [createRoom, {data}] = roomAPI.useCreateRoomMutation()

    async function handlerAccept() {
        await createRoom({name: title, max_users: 2})
    }

    async function handlerDeny() {
        setModal(false);
        setTitle("");
    }

    function handlerTitle(e: React.ChangeEvent<HTMLInputElement>) {
        setTitle(e.target.value)
    }

    return (
        <div className={createRoomStyle.container}>
            <h1>Создание комнаты</h1>
            <section className={createRoomStyle.inputs_wrapper}>
                <Input value={title} onChange={handlerTitle} type={"text"} title={"Название:"}/>
                Число игроков:
                <select className={createRoomStyle.select}>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                </select>
                <Input type={"password"} title={"Пароль (опционально)"}/>
            </section>
            <section className={createRoomStyle.buttons_wrapper}>
                <Button type={"deny"} onClick={handlerDeny}>Отмена</Button>
                <Button type={"accept"} onClick={handlerAccept}>Принять</Button>
            </section>
        </div>
    );
};

export default CreateRoom;