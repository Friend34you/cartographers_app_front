import React, {ChangeEventHandler, FC} from 'react';
import inputStyle from "./Input.module.css"
interface InputProps {
    title?: string;
    type: React.HTMLInputTypeAttribute;

    onChange?: ChangeEventHandler<HTMLInputElement>;
    value?: any;
}

const Input: FC<InputProps> = ({type, title, onChange, value}) => {
    return (
        <div className={inputStyle.wrapper}>
            {title && <label>{title}</label>}
            <input value={value} onChange={onChange} className={inputStyle.input} type={type}/>
        </div>
    );
};

export default Input;