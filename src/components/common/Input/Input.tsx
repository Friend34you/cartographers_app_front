import React, {ChangeEventHandler, FC} from 'react';
import s from "./Input.module.css"
interface InputProps extends  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    title?: string;
    type: React.HTMLInputTypeAttribute;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    value?: any;
    placeholder?: any;
}

const Input: FC<InputProps> = (props) => {
    return (
        <div className={s.wrapper}>
            {props.title && <label>{props.title}</label>}
            <input className={s.input}
                {...props}
            />
        </div>
    );
};

export default Input;