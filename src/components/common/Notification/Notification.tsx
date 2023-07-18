import React, {FC} from 'react';
import s from "./Notification.module.css"

interface NotificationProps {
    active: boolean;
}

const Notification: FC<NotificationProps> = ({active}) => {
    return (
        <div
            className={active
                ? `${s.notification} ${s.active}`
                : s.notification}
        >
            Успешно выполнено
        </div>
    );
};

export default Notification;