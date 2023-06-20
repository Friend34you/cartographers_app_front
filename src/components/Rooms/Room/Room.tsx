import React, {FC, useContext, useEffect, useState} from 'react';
import {Link, Navigate} from "react-router-dom";
import {ALL_ROOMS_ROUTE, GAME_ROUTE} from "../../../utils/consts";
import s from "./Room.module.css"
import copyImg from "../../../static/copy.png"
import kickUserImg from "./../../../static/close_red.png"
import adminImg from "./../../../static/roomAdmin/crown.png"
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
        pollingInterval: 1000
    })
    const [leaveRoom, {isSuccess: isLeaveRoomSuccess}] = roomAPI.useLeaveRoomMutation();
    const [kickUser, {isSuccess: isKickUserSuccess}] = roomAPI.useKickUserMutation();
    const [startGame, {
        isSuccess: isStartGameSuccess,
        isLoading: isStartGameLoading,
        isError: isStartGameError
    }] = gameAPI.useStartGameMutation();
    const [changeReadiness] = roomAPI.useChangeReadinessMutation()
    const [inviteCode] = useState('*здесь будет код*')
    const [notificationActive, setNotificationActive] = useState(false)
    const [readinessButton, setReadinessButton] = useState(false)
    //
    // useEffect(() => {
    //     window.addEventListener('beforeunload', leaveRoomOnPageClose);
    //     console.log("lalalal")
    //     return window.removeEventListener('beforeunload', leaveRoomOnPageClose)
    // }, [])

    async function handleChangeReadiness() {
        await changeReadiness();
        setReadinessButton(!readinessButton)
    }

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
    if (isError) {
        return (<div>ОШИБКА</div>)
    }


    return (
        <div className={s.room_container}>
            {isLoading && <Loader sidePxSize={100}/>}
            {isRoomSuccess && !isError && <>
                <h1>Room: {room.name}</h1>
                <div className={s.main_content_wrapper}>
                    <section>
                        <h2>Участники</h2>
                        <div className={`${s.item} ${s.item__users}`}>
                            {[...room.users]
                                .sort((a) => room.admin_id !== a.id ? 1 : -1)
                                .map(user =>
                                    <div className={s.user} key={user.id}>
                                        <UserIcon/>
                                        {user.name}
                                        {user.id === room.admin_id &&
                                            <img src={adminImg} alt={"главный"}
                                                 className={s.admin}/>}
                                        {user.id !== room.admin_id && currentUserData!.id === room.admin_id &&
                                            <img src={kickUserImg} alt="кикнуть"
                                                 className={s.kick_user}
                                                 onClick={() => kickUser(user.id)}
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
                            {currentUserData!.id === room.admin_id
                                ?
                                <Button colorType={"accept"}
                                        onClick={handlerStartGame}
                                        isDisabled={!room.is_ready_for_game}
                                >
                                    начать игру
                                </Button>
                                :
                                <Button colorType={"accept"}
                                        onClick={handleChangeReadiness}>
                                    {readinessButton
                                        ? "Не готов"
                                        : "Готов"}
                                </Button>
                            }
                        </div>
                        {isStartGameLoading && <Loader sidePxSize={35}/>}
                        {isStartGameError && <div>Ошибка</div>}
                        {!isStartGameError && isStartGameSuccess && <Navigate to={GAME_ROUTE}/>}
                        {room.is_game_started && <Navigate to={GAME_ROUTE}/>}
                    </section>
                </div>
                <Notification active={notificationActive}/>
            </>}
        </div>
    );
};

export default Room;