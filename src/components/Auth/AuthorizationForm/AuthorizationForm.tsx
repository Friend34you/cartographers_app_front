import React, {useState} from 'react';
import s from "../AuthorizationForm/AuthorizationForm.module.css";
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


                <div className={s.buttons_wrapper}>
                    <Button type={"submit"} colorType={"deny"} onClick={clearFields}>Очистить</Button>
                    <Button type={"submit"} colorType={"accept"}>Войти</Button>
                </div>
            </form>
        </div>
    );
};

export default AuthorizationForm;