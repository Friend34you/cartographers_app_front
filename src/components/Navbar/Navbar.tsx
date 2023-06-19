import React, {useContext, useState} from 'react';
import s from "./Navbar.module.css"
import Button from "../common/Button/Button";
import useDebounce from "../../hooks/useDebounce";
import {roomAPI} from "../../services/RoomService";
import Modal from "../common/Modal/Modal";
import UserIcon from "../common/UserIcon/UserIcon";
import CreateRoomForm from "./CreateRoomForm/CreateRoomForm";
import Input from "../common/Input/Input";
import InviteCodeEnterForm from "./InviteCodeEnterForm/InviteCodeEnterForm";
import {userAPI} from "../../services/UserService";
import {AuthContext} from "../AppRouter";
import Loader from "../common/Loader/Loader";

const Navbar = () => {
    const {setIsAuthorized} = useContext(AuthContext)
    const [codeEnterModal, setCodeEnterModal] = useState(false);
    const [createRoomModal, setCreateRoomModal] = useState(false);
    const [userOptionsVisibility, setUserOptionsVisibility] = useState(false);

    const [searchValue, setSearchValue] = useState('');

    const [findRoom, {data}] = roomAPI.useFindRoomMutation()
    const {data: user, isSuccess, isFetching} = userAPI.useFetchUserDataQuery("", {
        refetchOnMountOrArgChange: true
    })

    const debouncedCallback = useDebounce((value: string) => {
        return findRoom(value)
    }, 1000)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(searchValue)
        setSearchValue(e.target.value);
        debouncedCallback(e.target.value)
    }

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsAuthorized && setIsAuthorized(false)
    }

    if (isSuccess) console.log(user)

    return (
        <>
            <div className={s.navbar}>
                <section className={s.actions}>
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
                <section className={s.input_wrapper}>
                    <Input placeholder={"Введите название / id комнаты..."}
                           value={searchValue}
                           onChange={handleInputChange}
                           type="search"
                    />
                </section>
                <section className={s.user_wrapper} onClick={() => setUserOptionsVisibility(prev => !prev)}>
                    {isFetching && <Loader sidePxSize={35}/>}
                    {!isFetching && isSuccess && <span>{user.username}</span>}
                    <UserIcon/>
                </section>
            </div>
            <div className={userOptionsVisibility
                ? `${s.user_options} ${s.active}`
                : s.user_options}
            >
                <Button colorType={"deny"} onClick={handleLogout}>Выйти</Button>
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