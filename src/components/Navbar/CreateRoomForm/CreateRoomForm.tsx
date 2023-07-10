import React, {FC, useState} from 'react';
import Button from "../../common/Button/Button";
import s from "./CreateRoomForm.module.css"
import Input from "../../common/Input/Input";
import {roomAPI} from "../../../services/RoomService";
import {Navigate} from "react-router-dom";
import {ROOM_ROUTE} from "../../../utils/routeConsts";
import {ifError} from "assert";
import Loader from "../../common/Loader/Loader";

interface CreateRoomProps {
    setModal: Function;
}

const CreateRoomForm: FC<CreateRoomProps> = ({setModal}) => {
    const [title, setTitle] = useState("")
    const [password, setPassword] = useState("")
    const [selectValue, setSelectValue] = useState("2");
    const [createRoom, {isSuccess, isLoading, isError}] = roomAPI.useCreateRoomMutation()
    const maxUsersInRoom = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

    async function handleAccept() {
        await createRoom({
            name: title,
            max_users: selectValue,
            password: String(password.trim()) !== "" ? String(password.trim()) : null
        });
    }

    async function handleDeny() {
        setModal(false);
        setTitle("");
    }

    function handleTitle(e: React.ChangeEvent<HTMLInputElement>) {
        setTitle(e.target.value)
    }

    function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value)
    }

    function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setSelectValue(e.target.value)
    }

    return (
        <div className={s.container}>
            <h1>Создание комнаты</h1>
            <section className={s.inputs_wrapper}>
                <Input value={title} onChange={handleTitle} type={"search"} title={"Название:"}/>
                Число игроков:
                <select
                    className={s.select}
                    value={selectValue}
                    onChange={handleSelectChange}
                >
                    {maxUsersInRoom.map(value =>
                        <option key={value} value={value}>{value}</option>)}
                </select>
                <Input value={password} onChange={handlePassword} type={"password"} title={"Пароль (опционально)"}/>
                {isError && <div>Произошла ошибка</div>}
                {isSuccess && <Navigate to={ROOM_ROUTE}/>}
            </section>
            <section className={s.buttons_wrapper}>
                <Button colorType={"deny"} onClick={handleDeny}>Отмена</Button>
                {isLoading && <Loader sidePxSize={35}/>}
                <Button colorType={"accept"} onClick={handleAccept}>Создать</Button>
            </section>
        </div>
    );
};

export default CreateRoomForm;