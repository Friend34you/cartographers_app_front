import React, {FC} from 'react';
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
interface InviteCodeEnterProps {
    setModal?: Function
}
const InviteCodeEnterForm:FC<InviteCodeEnterProps> = () => {

    return (
        <>
            <h1>Войти с помощью Invite-code</h1>
            <Input
                type={"search"}
                title={"Код приглашения:"}
                placeholder={"Введите invite-code..."}
            />
            <Button
                colorType={"accept"}
            >
                Войти
            </Button>
        </>
    );
};

export default InviteCodeEnterForm;