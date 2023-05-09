import React, {FC} from 'react';
import notificationStyle from "./Notification.module.css"

interface NotificationProps {
    active: boolean;
    // setActive(): void;
}

const Notification: FC<NotificationProps> = ({active}) => {
    return (
        <div
            className={active
                ? `${notificationStyle.notification} ${notificationStyle.active}`
                : notificationStyle.notification}
        >
            Успешно выполнено
        </div>
    );
};

export default Notification;