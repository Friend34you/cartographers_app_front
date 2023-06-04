import React, {FC, useState} from 'react';
import Button from "../../common/Button/Button";
import {Link} from "react-router-dom";
import {ALL_ROOMS_ROUTE, GAME_ROUTE} from "../../../utils/consts";
import s from "./Room.module.css"
import UserIcon from "../../common/UserIcon/UserIcon";
import copyImg from "../../../static/copy.png"
import Notification from "../../common/Notification/Notification";
import kickUser from "./../../../static/close_red.png"
import {roomAPI} from "../../../services/RoomService";

const Room: FC = () => {
    const {data: room, isSuccess, isError, isLoading} = roomAPI.useFetchRoomQuery("", {
        refetchOnMountOrArgChange: true,
    })
    const [inviteCode] = useState('*здесь будет код*')
    const [notificationActive, setNotificationActive] = useState(false)

    async function handlerOnClick() {
        await navigator.clipboard.writeText(inviteCode)
        setNotificationActive(true);
        setTimeout(() => setNotificationActive(false), 1000)
    }

    if (isSuccess) console.log(room)

    return (
        <div className={s.room_container}>
            {isLoading && <div>Loading...</div>}
            {isError && <div>ОШИБКА</div>}
            {isSuccess && <>
                <h1>Room: {room.name}</h1>
                <div className={s.main_content_wrapper}>
                    <section>
                        <h2>Участники</h2>
                        <div className={`${s.item} ${s.item__users}`}>
                            {room.users.map(user =>
                                <div className={s.user} key={user.id}>
                                    <UserIcon/>
                                    {user.name}
                                    {/*<img src={kickUser} alt="кикнуть"*/}
                                    {/*     className={roomStyle.kick_user}/>*/}
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
                            <Link to={ALL_ROOMS_ROUTE}>
                                <Button colorType={"deny"}>
                                    Покинуть комнату
                                </Button>
                            </Link>
                            <Link to={GAME_ROUTE}>
                                <Button colorType={"accept"}>
                                    Готов
                                </Button>
                            </Link>
                        </div>
                    </section>
                </div>
                <Notification active={notificationActive}/>
            </>}
        </div>
    );
};

export default Room;