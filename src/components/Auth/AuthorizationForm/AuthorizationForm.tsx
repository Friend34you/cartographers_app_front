import React from 'react';
import registrationStyle from "../AuthorizationForm/AuthorizationForm.module.css";
import Button from "../../common/Button/Button";
import {useForm} from "react-hook-form";

const AuthorizationForm = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm({
        mode: "onBlur",

    });
    const onSubmit = (data: object) => {
        console.log(data);
        reset();
    }

    function clearFields() {
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className=
                {registrationStyle.form}>
                <h1>Авторизация</h1>
                <span className={registrationStyle.message_wrapper}>
                    <label>Логин:</label>
                    {errors?.username &&
                        <p className={registrationStyle.error}>
                            {errors?.username?.message as string}
                        </p>}
                </span>
                <input className={registrationStyle.input} type="text" placeholder="Login" {...register("username", {
                    required: "Поле обязательно к заполнению",
                })} />


                <span className={registrationStyle.message_wrapper}>
                    <label>Пароль:</label>
                    {errors?.password &&
                        <p className={registrationStyle.error}>
                            {errors?.password?.message as string}
                        </p>}
                </span>
                <input className={registrationStyle.input}
                       type="password"
                       placeholder="Password" {...register("password", {
                    required: "Поле обязательно к заполнению",
                })} />

                <div className={registrationStyle.buttons_wrapper}>
                    <Button type={"submit"} colorType={"deny"} onClick={clearFields}>Очистить</Button>
                    <Button type={"submit"} colorType={"accept"}>Войти</Button>
                </div>
            </form>
        </div>
    );
};

export default AuthorizationForm;