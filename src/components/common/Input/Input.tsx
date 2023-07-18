import React, {ChangeEventHandler, FC, forwardRef} from 'react';
import s from "./Input.module.css"
interface InputProps extends  React.PropsWithoutRef<JSX.IntrinsicElements["input"]>{
    title?: string;
    // type: React.HTMLInputTypeAttribute;
    // onChange?: ChangeEventHandler<HTMLInputElement>;
    // value?: any;
    // placeholder?: any;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(props, ref) {
    return (
        <div className={s.wrapper}>
            {props.title && <label>{props.title}</label>}
            <input className={s.input}
                {...props}
                ref={ref}
            />
        </div>
    );
});

export default Input;