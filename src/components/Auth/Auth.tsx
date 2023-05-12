import React, {FC, useState} from 'react';
import Modal from "../common/Modal/Modal";
import Button from "../common/Button/Button";
import authStyle from "./Auth.module.css"
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import AuthorizationForm from "./AuthorizationForm/AuthorizationForm";
import mainImg from "./../../static/Cartographers A Roll Player Tale.jpg"
const Auth: FC = () => {
    const [registrationModal, setRegistrationModal] = useState(false);
    const [authorizationModal, setAuthorizationModal] = useState(false);

    function handleOnClickRegistration() {
        setRegistrationModal(true)
    }

    function handleOnClickAuthorization() {
        setAuthorizationModal(true)
    }

    return (
        <div className={authStyle.container}>
            <h1 className={authStyle.name}>
                <p>Веб-игра</p>
                <p className={authStyle.item2}>Картографы</p>
            </h1>
            <nav className={authStyle.nav}>
                <Button colorType={"accept"} onClick={handleOnClickRegistration}>Регистрация</Button>
                <Button colorType={"accept"} onClick={handleOnClickAuthorization}>Вход</Button>
            </nav>
            <div className={authStyle.img_wrapper}>
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

export default Auth;