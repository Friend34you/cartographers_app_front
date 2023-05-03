import React, {useState} from 'react';
import navbarStyle from "./Navbar.module.css"
import Button from "../common/Button/Button";
import useDebounce from "../../hooks/useDebounce";
import {roomAPI} from "../../services/RoomService";
import Modal from "../common/Modal/Modal";

const Navbar = () => {
    const [codeEnterModal, setCodeEnterModal] = useState(false);
    const [createRoomModal, setCreateRoomModal] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [findRoom, {data}] = roomAPI.useFindRoomMutation()
    const debouncedCallback = useDebounce((value: string) => {
        console.log("Подгрузка:" + value)
        return findRoom(value)
    }, 1000)
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("value" + searchValue)
        setSearchValue(e.target.value);
        debouncedCallback(e.target.value)
    }
    return (
        <>
            <div className={navbarStyle.navbar}>
                <div>
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
                    <input value={searchValue} onChange={onChange} type="search"/>
                </div>
                <div className={navbarStyle.profile}></div>
            </div>
            <Modal active={codeEnterModal} setActive={setCodeEnterModal}>gff</Modal>
            <Modal active={createRoomModal} setActive={setCreateRoomModal}>gfgf</Modal>
            <div>{data && data[0]}</div>
        </>

    );
};

export default Navbar;