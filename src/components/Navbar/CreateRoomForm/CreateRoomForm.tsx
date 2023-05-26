import React, {FC, useState} from 'react';
import Button from "../../common/Button/Button";
import s from "./CreateRoomForm.module.css"
import Input from "../../common/Input/Input";
import {roomAPI} from "../../../services/RoomService";

interface CreateRoomProps {
    setModal: Function;
}

const CreateRoomForm: FC<CreateRoomProps> = ({setModal}) => {
    const [title, setTitle] = useState("")
    const [createRoom, {data}] = roomAPI.useCreateRoomMutation()
    const [selectValue, setSelectValue] = useState("2")
    async function handleAccept() {
        console.log(title)
        console.log(selectValue)
        // await createRoom({name: title, max_users: 2})
    }

    async function handleDeny() {
        setModal(false);
        setTitle("");
    }

    function handleTitle(e: React.ChangeEvent<HTMLInputElement>) {
        setTitle(e.target.value)
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
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                </select>
                <Input type={"password"} title={"Пароль (опционально)"}/>
            </section>
            <section className={s.buttons_wrapper}>
                <Button colorType={"deny"} onClick={handleDeny}>Отмена</Button>
                <Button colorType={"accept"} onClick={handleAccept}>Создать</Button>
            </section>
        </div>
    );
};

export default CreateRoomForm;