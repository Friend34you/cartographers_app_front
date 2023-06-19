import React, {useContext, useState} from 'react';
import s from "../AuthorizationForm/AuthorizationForm.module.css";
import Button from "../../common/Button/Button";
import {useForm} from "react-hook-form";
import view from "./../../../static/view.png"
import hide from "./../../../static/hide.png"
import {authAPI} from "../../../services/AuthService";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {AuthContext} from "../../AppRouter";

const AuthorizationForm = () => {
    const {setIsAuthorized} = useContext(AuthContext)
    const [authorize, {data: token, isLoading, isError, isSuccess, error}] = authAPI.useAuthorizationMutation()
    const {register, handleSubmit, reset, formState: {errors}} = useForm({
        mode: "onBlur",

    });
    const [passwordShown, setPasswordShown] = useState(false);
    const eye = passwordShown
        ? hide
        : view
    const onSubmit = async (data: object) => {
        const response = await authorize(data)
        if (response) {
            console.log(response);
            reset()
        }
    }

    function clearFields() {
        reset();
    }

    function togglePasswordVisibility() {
        setPasswordShown(prev => !prev)
    }

    if (isSuccess) {
        localStorage.setItem("token" ,token?.auth_token!);
        setIsAuthorized && setIsAuthorized(true)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className=
                {s.form}>
                <h1>Авторизация</h1>
                <span className={s.message_wrapper}>
                    <label>Логин:</label>
                    {errors?.username &&
                        <p className={s.error}>
                            {errors?.username?.message as string}
                        </p>}
                </span>
                <input className={s.input} type="text" placeholder="Login" {...register("username", {
                    required: "Поле обязательно к заполнению",
                })} />


                <span className={s.message_wrapper}>
                    <label>Пароль:</label>
                    {errors?.password &&
                        <p className={s.error}>
                            {errors?.password?.message as string}
                        </p>}
                </span>
                <div className={s.input_wrapper}>
                    <input className={s.input}
                           type={passwordShown ? "text" : "password"}
                           placeholder="Password" {...register("password", {
                        required: "Поле обязательно к заполнению",
                    })} />
                    <img
                        className={s.image}
                        src={eye} alt={"eye"}
                        onClick={togglePasswordVisibility}
                    />
                </div>
                {isLoading && <div>Загрузка...</div>}
                {isError &&
                    <p className={s.error}>
                        Неверные данные
                    </p>}
                <div className={s.buttons_wrapper}>
                    <Button type={"button"} colorType={"deny"} onClick={clearFields}>Очистить</Button>
                    <Button type={"submit"} colorType={"accept"}>Войти</Button>
                </div>
            </form>
        </div>
    );
};

export default AuthorizationForm;