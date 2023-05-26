import React from 'react';
import defaultUserAvatar from "../../../static/userDefault.svg";
import s from "./UserIcon.module.css"

const UserIcon = () => {
    return (
            <img src={defaultUserAvatar} alt="" className={s.img}/>
    );
};

export default UserIcon;