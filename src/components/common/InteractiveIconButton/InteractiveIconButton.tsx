import React, {FC} from 'react';
import s from "./InteractiveIconButton.module.css"
import invertH from "../../../static/invertHorizontal2.png";

interface IconButtonProps {
    icon: string;
    iconDescription?: string;
    onClick: () => void;
}

const InteractiveIconButton: FC<IconButtonProps> = ({icon, onClick, iconDescription}) => {
    return (
        <div
            className={s.button}
            onClick={onClick}
        >
            <img draggable={"false"} src={icon} alt={iconDescription}/>
        </div>
    );
};

export default InteractiveIconButton;