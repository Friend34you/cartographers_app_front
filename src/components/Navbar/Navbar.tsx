import React, {useState} from 'react';
import navbarStyle from "./Navbar.module.css"
import Button from "../common/Button/Button";
import useDebounce from "../../hooks/useDebounce";
import {roomAPI} from "../../services/RoomService";
import Modal from "../common/Modal/Modal";
import UserIcon from "../common/UserIcon/UserIcon";
import CreateRoomForm from "./CreateRoomForm/CreateRoomForm";
import Input from "../common/Input/Input";
import InviteCodeEnterForm from "./InviteCodeEnterForm/InviteCodeEnterForm";

const Navbar = () => {
    const [codeEnterModal, setCodeEnterModal] = useState(false);
    const [createRoomModal, setCreateRoomModal] = useState(false);
    const [userOptionsVisibility, setUserOptionsVisibility] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [findRoom, {data}] = roomAPI.useFindRoomMutation()
    const debouncedCallback = useDebounce((value: string) => {
        return findRoom(value)
    }, 1000)
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(searchValue)
        setSearchValue(e.target.value);
        debouncedCallback(e.target.value)
    }
    return (
        <>
            <div className={navbarStyle.navbar}>
                <section className={navbarStyle.actions}>
                    <Button
                        colorType={"accept"}
                        onClick={() => setCreateRoomModal(true)}
                    >
                        Создать комнату
                    </Button>
                    <Button
                        colorType={"accept"}
                        onClick={() => setCodeEnterModal(true)}
                    >
                        Войти по Коду
                    </Button>
                </section>
                <section className={navbarStyle.input_wrapper}>
                    <Input placeholder={"Введите название / id комнаты..."}
                           value={searchValue}
                           onChange={handleInputChange}
                           type="search"
                    />
                </section>
                <section className={navbarStyle.user_wrapper} onClick={() => setUserOptionsVisibility(prev => !prev)}>
                    <span>юзернейм</span>
                    <UserIcon/>
                </section>
            </div>
            <div className={userOptionsVisibility
                ? `${navbarStyle.user_options} ${navbarStyle.active}`
                : navbarStyle.user_options}
            >
                <Button colorType={"deny"}>Выйти</Button>
            </div>
            <Modal active={codeEnterModal} setActive={setCodeEnterModal}>
                <InviteCodeEnterForm/>
            </Modal>
            <Modal active={createRoomModal} setActive={setCreateRoomModal}>
                <CreateRoomForm setModal={setCreateRoomModal}/>
            </Modal>
        </>

    );
};

export default Navbar;