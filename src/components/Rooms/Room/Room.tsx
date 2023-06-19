import React, {FC, useContext, useEffect, useState} from 'react';
import {Link, Navigate} from "react-router-dom";
import {ALL_ROOMS_ROUTE, GAME_ROUTE} from "../../../utils/consts";
import s from "./Room.module.css"
import copyImg from "../../../static/copy.png"
import kickUserImg from "./../../../static/close_red.png"
import adminImg from "./../../../static/close_red.png"
import Button from "../../common/Button/Button";
import UserIcon from "../../common/UserIcon/UserIcon";
import Notification from "../../common/Notification/Notification";
import Loader from "../../common/Loader/Loader";
import {roomAPI} from "../../../services/RoomService";
import {gameAPI} from "../../../services/GameService";
import {userAPI} from "../../../services/UserService";

const Room: FC = () => {
    /** Возможно, стоит хранить в localStorage id пользователя и выцеплять из контекста **/
    const {data: currentUserData} = userAPI.useFetchUserDataQuery("", {})
    const {data: room, isSuccess: isRoomSuccess, isError, isLoading} = roomAPI.useFetchRoomQuery("", {
        refetchOnMountOrArgChange: true,
        pollingInterval: 3000
    })
    const [leaveRoom, {isSuccess: isLeaveRoomSuccess}] = roomAPI.useLeaveRoomMutation();
    const [kickUser, {isSuccess: isKickUserSuccess}] = roomAPI.useKickUserMutation();
    const [startGame, {isSuccess: isStartGameSuccess, isLoading: isStartGameLoading}] = gameAPI.useStartGameMutation();
    const [inviteCode] = useState('*здесь будет код*')
    const [notificationActive, setNotificationActive] = useState(false)
    //
    // useEffect(() => {
    //     window.addEventListener('beforeunload', leaveRoomOnPageClose);
    //     console.log("lalalal")
    //     return window.removeEventListener('beforeunload', leaveRoomOnPageClose)
    // }, [])

    function leaveRoomOnPageClose(e: BeforeUnloadEvent) {
        e.preventDefault();
        leaveRoom()
        return "lol"
    }

    async function handlerStartGame() {
        await startGame();
    }

    async function handlerOnClick() {
        await navigator.clipboard.writeText(inviteCode)
        setNotificationActive(true);
        setTimeout(() => setNotificationActive(false), 1000)
    }

    async function handleLeave() {
        console.log("тык")
        await leaveRoom()
    }

    if (isRoomSuccess) console.log(room)

    return (
        <div className={s.room_container}>
            {isLoading && <Loader sidePxSize={100}/>}
            {isError && <div>ОШИБКА</div>}
            {isRoomSuccess && <>
                <h1>Room: {room.name}</h1>
                <div className={s.main_content_wrapper}>
                    <section>
                        <h2>Участники</h2>
                        <div className={`${s.item} ${s.item__users}`}>
                            {room.users.map(user =>
                                <div className={s.user} key={user.id}>
                                    <UserIcon/>
                                    {user.name}
                                    {user.id === room.admin_id && <p>Главный</p>}
                                    {user.id !== room.admin_id && currentUserData!.id === room.admin_id &&
                                        <img src={kickUserImg} alt="кикнуть"
                                             className={s.kick_user}
                                             onClick={() => kickUser(String(user.id))}
                                        />}
                                </div>
                            )}
                        </div>
                    </section>
                    <section>
                        <h2>Пригласить друга</h2>
                        <div className={`${s.item} ${s.item__invite_code}`}>
                            <h2>Код приглашения</h2>
                            <div className={s.invite_code}>
                                {inviteCode}
                                <img
                                    src={copyImg}
                                    className={s.copy_img}
                                    onClick={handlerOnClick}
                                />
                            </div>
                        </div>

                        <div className={s.buttons_wrapper}>
                            <Button colorType={"deny"}
                                    onClick={handleLeave}
                            >
                                Покинуть комнату
                            </Button>
                            {isLeaveRoomSuccess && <Navigate to={ALL_ROOMS_ROUTE}/>}
                            <Link to={GAME_ROUTE}>
                                <Button colorType={"accept"}>
                                    Готов
                                </Button>
                            </Link>
                            <Button colorType={"accept"}
                                    onClick={handlerStartGame}
                            >
                                начать игру
                            </Button>
                        </div>
                        {isStartGameLoading && <Loader sidePxSize={35}/>}

                    </section>
                </div>
                <Notification active={notificationActive}/>
            </>}
        </div>
    );
};

export default Room;