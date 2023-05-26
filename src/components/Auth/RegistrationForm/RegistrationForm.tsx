import React, {FC, useState} from 'react';
import s from "./RegistrationForm.module.css";
import Button from "../../common/Button/Button";
import {useForm} from "react-hook-form";
import view from "./../../../static/view.png"
import hide from "./../../../static/hide.png"

const RegistrationForm: FC = () => {
    const {register, watch, handleSubmit, reset, formState: {errors}} = useForm({
        mode: "onBlur",
    });
    const [passwordShown, setPasswordShown] = useState(false);
    const eye = passwordShown
        ? hide
        : view
    const onSubmit = (data: object) => {
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
                <h1>Регистрация</h1>
                <span className={s.message_wrapper}>
                    <label>Логин:</label>
                    {errors?.username &&
                        <p className={s.error}>
                            {errors?.username?.message as string}
                        </p>}
                </span>
                <input className={s.input} type="text" placeholder="Login" {...register("username", {
                    required: "Поле обязательно к заполнению",
                    minLength: {
                        value: 5,
                        message: "Минимум 5 символов"
                    },
                    maxLength: {
                        value: 20,
                        message: "Максимум 20 символов"
                    },
                    pattern: {
                        value: /^[a-zA-Z0-9_]+$/i,
                        message: "Имя пользователя недопустимо"
                    }
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
                        minLength: {
                            value: 8,
                            message: "Минимум 8 символов"
                        },
                        maxLength: {
                            value: 30,
                            message: "Максимум 30 символов"
                        },
                    })} />
                    <img
                        className={s.image}
                        src={eye} alt={"eye"}
                        onClick={togglePasswordVisibility}
                    />
                </div>


                <span className={s.message_wrapper}>
                    <label>Подтвердите пароль:</label>
                    {errors?.confirm_password &&
                        <p className={s.error}>
                            {errors?.confirm_password?.message as string}
                        </p>}
                </span>
                <input className={s.input}
                       type="password"
                       placeholder="Confirm password" {...register("confirm_password", {
                    required: "Поле обязательно к заполнению",
                    validate: (val: string) => {
                        if (watch('password') !== val) {
                            return "Пароль не совпадает";
                        }
                    },
                })} />

                <div className={s.buttons_wrapper}>
                    <Button type={"submit"} colorType={"deny"} onClick={clearFields}>Очистить</Button>
                    <Button type={"submit"} colorType={"accept"}>Зарегистрироваться</Button>
                </div>
            </form>

        </div>
    );
};

export default RegistrationForm;