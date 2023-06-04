import React, {FC, useState} from 'react';
import Modal from "../common/Modal/Modal";
import Button from "../common/Button/Button";
import s from "./AuthPage.module.css"
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import AuthorizationForm from "./AuthorizationForm/AuthorizationForm";
import mainImg from "./../../static/Cartographers A Roll Player Tale.jpg"
const AuthPage: FC = () => {
    const [registrationModal, setRegistrationModal] = useState(false);
    const [authorizationModal, setAuthorizationModal] = useState(false);

    function handleOnClickRegistration() {
        setRegistrationModal(true)
    }

    function handleOnClickAuthorization() {
        setAuthorizationModal(true)
    }

    return (
        <div className={s.container}>
            <h1 className={s.name}>
                <p>Веб-игра</p>
                <p className={s.item2}>Картографы</p>
            </h1>
            <nav className={s.nav}>
                <Button colorType={"accept"} onClick={handleOnClickRegistration}>Регистрация</Button>
                <Button colorType={"accept"} onClick={handleOnClickAuthorization}>Вход</Button>
            </nav>
            <div className={s.img_wrapper}>
                {/*<img src={mainImg} alt=""/>*/}
            </div>
            <Modal active={registrationModal} setActive={setRegistrationModal}>
                <RegistrationForm/>
            </Modal>
            <Modal active={authorizationModal} setActive={setAuthorizationModal}>
                <AuthorizationForm/>
            </Modal>
        </div>
    );
};

export default AuthPage;