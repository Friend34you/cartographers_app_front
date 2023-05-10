import React, {useState} from 'react';
import navbarStyle from "./Navbar.module.css"
import Button from "../common/Button/Button";
import useDebounce from "../../hooks/useDebounce";
import {roomAPI} from "../../services/RoomService";
import Modal from "../common/Modal/Modal";
import UserIcon from "../common/UserIcon/UserIcon";
import CreateRoom from "../Rooms/CreateRoom/CreateRoom";
import Input from "../common/Input/Input";

const Navbar = () => {
    const [codeEnterModal, setCodeEnterModal] = useState(false);
    const [createRoomModal, setCreateRoomModal] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [findRoom, {data}] = roomAPI.useFindRoomMutation()
    const debouncedCallback = useDebounce((value: string) => {
        return findRoom(value)
    }, 1000)
    const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(searchValue)
        setSearchValue(e.target.value);
        debouncedCallback(e.target.value)
    }
    return (
        <>
            <div className={navbarStyle.navbar}>
                <div className={navbarStyle.actions}>
                    <Button
                        type={"accept"}
                        onClick={() => setCreateRoomModal(true)}
                    >
                        Создать комнату
                    </Button>
                    <Button
                        type={"accept"}
                        onClick={() => setCodeEnterModal(true)}
                    >
                        Войти по Коду
                    </Button>
                </div>
                <div className={navbarStyle.input_wrapper}>
                    <Input placeholder={"Введите название / id комнаты..."} value={searchValue} onChange={handlerChange} type="search"/>
                </div>
                <UserIcon/>
                {/*<div className={navbarStyle.profile}></div>*/}
            </div>
            <Modal active={codeEnterModal} setActive={setCodeEnterModal}>
                <h1>Войти с помощью Invite-code</h1>
                <Input
                    type={"search"}
                    title={"Код приглашения:"}
                    placeholder={"Введите invite-code..."}
                />
                <Button
                    type={"accept"}
                    onClick={() => setCodeEnterModal(true)}
                >
                    Войти
                </Button>
            </Modal>
            <Modal active={createRoomModal} setActive={setCreateRoomModal}>
                <CreateRoom setModal={setCreateRoomModal}/>
            </Modal>
            <div>{data && data[0]}</div>
        </>

    );
};

export default Navbar;