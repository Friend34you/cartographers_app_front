import React, {FC, MouseEventHandler, ReactNode} from 'react';
import buttonStyle from "./Button.module.css";

interface ButtonProps {
    colorType: "deny" | "accept";
    children?: string | number | ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>
    type?: "button" | "reset" | "submit" | undefined;
}

const Button: FC<ButtonProps> = ({colorType, children, onClick, type}) => {
    const color = colorType === "accept" ? buttonStyle.accept : buttonStyle.deny
    return (
        <button
            className={`${buttonStyle.button} ${color}`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;