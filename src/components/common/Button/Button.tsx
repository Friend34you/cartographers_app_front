import React, {FC, MouseEventHandler, ReactNode} from 'react';
import buttonStyle from "./Button.module.css";

interface ButtonProps {
    type: "deny" | "accept";
    children?: string | number | ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button: FC<ButtonProps> = ({type, children, onClick}) => {
    const color = type === "accept" ? buttonStyle.accept : buttonStyle.deny
    return (
        <button
            className={`${buttonStyle.button} ${color}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;