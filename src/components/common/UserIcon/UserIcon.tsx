import React from 'react';
import defaultUserAvatar from "../../../static/userDefault.svg";
import userIconStyle from "./UserIcon.module.css"

const UserIcon = () => {
    return (
            <img src={defaultUserAvatar} alt="" className={userIconStyle.img}/>
    );
};

export default UserIcon;