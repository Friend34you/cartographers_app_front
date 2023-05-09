import React, {FC, useState} from 'react';
import Button from "../../common/Button/Button";
import {Link} from "react-router-dom";
import {ALL_ROOMS_ROUTE} from "../../../utils/consts";
import roomStyle from "./Room.module.css"
import UserIcon from "../../common/UserIcon/UserIcon";
import copyImg from "../../../static/copy.png"

const Room: FC = () => {
    const [inviteCode, setInviteCode] = useState('*здесь будет код*')
    async function handlerOnClick() {
        await navigator.clipboard.writeText(inviteCode)
    }

    return (
        <div className={roomStyle.room_container}>
            <h1>Room: Zhopa</h1>
            <div className={roomStyle.main_content_wrapper}>
                <section>
                    <h2>Участники</h2>
                    <div className={`${roomStyle.item} ${roomStyle.item__users}`}>
                        <div className={roomStyle.user}>
                            <UserIcon/>
                            Вовчик
                        </div>
                        <div className={roomStyle.user}>овчик</div>
                        <div className={roomStyle.user}>овчик</div>
                        <div className={roomStyle.user}>овчик</div>
                        <div className={roomStyle.user}>овчик</div>
                        <div className={roomStyle.user}>овчик</div>
                        <div className={roomStyle.user}>овчик</div>
                        <div className={roomStyle.user}>овчик</div>
                    </div>
                </section>
                <section>
                    <h2>Пригласить друга</h2>
                    <div className={`${roomStyle.item} ${roomStyle.item__invite_code}`}>
                        <h2>Код приглашения</h2>
                        <div className={roomStyle.invite_code}>
                            {inviteCode}
                            <img
                                src={copyImg}
                                className={roomStyle.copy_img}
                                onClick={handlerOnClick}
                            />
                        </div>
                    </div>
                    <div className={roomStyle.buttons_wrapper}>
                        <Link to={ALL_ROOMS_ROUTE}>
                            <Button type={"deny"}>
                                Покинуть комнату
                            </Button>
                        </Link>
                        <Button type={"accept"}>
                            Готов
                        </Button>
                    </div>
                </section>
            </div>
            <div className={`${roomStyle.notification} ${roomStyle.active}`}>Успешно выполнено</div>
        </div>
    );
};

export default Room;