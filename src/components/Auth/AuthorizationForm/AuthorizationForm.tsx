import React, {useState} from 'react';
import authorizationStyle from "../AuthorizationForm/AuthorizationForm.module.css";
import Button from "../../common/Button/Button";
import {useForm} from "react-hook-form";
import view from "./../../../static/view.png"
import hide from "./../../../static/hide.png"

const AuthorizationForm = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm({
        mode: "onBlur",

    });
    const [passwordShown, setPasswordShown] = useState(false);
        const eye = passwordShown
        ? hide
        : view
    const onSubmit = (data: object) => {
        console.log(data);
        reset();
    }

    function clearFields() {
        reset();
    }

    function togglePasswordVisibility() {
        setPasswordShown(prev => !prev)
    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className=
                {authorizationStyle.form}>
                <h1>Авторизация</h1>
                <span className={authorizationStyle.message_wrapper}>
                    <label>Логин:</label>
                    {errors?.username &&
                        <p className={authorizationStyle.error}>
                            {errors?.username?.message as string}
                        </p>}
                </span>
                <input className={authorizationStyle.input} type="text" placeholder="Login" {...register("username", {
                    required: "Поле обязательно к заполнению",
                })} />


                <span className={authorizationStyle.message_wrapper}>
                    <label>Пароль:</label>
                    {errors?.password &&
                        <p className={authorizationStyle.error}>
                            {errors?.password?.message as string}
                        </p>}
                </span>
                <div className={authorizationStyle.input_wrapper}>
                    <input className={authorizationStyle.input}
                           type={passwordShown ? "text" : "password"}
                           placeholder="Password" {...register("password", {
                        required: "Поле обязательно к заполнению",
                    })} />
                    <img
                        className={authorizationStyle.image}
                        src={eye} alt={"eye"}
                        onClick={togglePasswordVisibility}
                    />
                </div>


                <div className={authorizationStyle.buttons_wrapper}>
                    <Button type={"submit"} colorType={"deny"} onClick={clearFields}>Очистить</Button>
                    <Button type={"submit"} colorType={"accept"}>Войти</Button>
                </div>
            </form>
        </div>
    );
};

export default AuthorizationForm;