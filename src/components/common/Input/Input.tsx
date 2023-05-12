import React, {ChangeEventHandler, FC} from 'react';
import inputStyle from "./Input.module.css"
interface InputProps extends  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    title?: string;
    type: React.HTMLInputTypeAttribute;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    value?: any;
    placeholder?: any;
}

const Input: FC<InputProps> = (props) => {
    return (
        <div className={inputStyle.wrapper}>
            {props.title && <label>{props.title}</label>}
            <input className={inputStyle.input}
                {...props}
            />
        </div>
    );
};

export default Input;