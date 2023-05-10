import React, {ChangeEventHandler, FC} from 'react';
import inputStyle from "./Input.module.css"
interface InputProps {
    title?: string;
    type: React.HTMLInputTypeAttribute;

    onChange?: ChangeEventHandler<HTMLInputElement>;
    value?: any;
    placeholder?: any;
}

const Input: FC<InputProps> = ({type, title, onChange, value, placeholder}) => {
    return (
        <div className={inputStyle.wrapper}>
            {title && <label>{title}</label>}
            <input
                className={inputStyle.input}
                value={value}
                type={type}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;