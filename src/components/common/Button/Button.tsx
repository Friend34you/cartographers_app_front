import React, {FC, MouseEventHandler, ReactNode} from 'react';
import s from "./Button.module.css";

interface ButtonProps {
    colorType: "deny" | "accept";
    children?: string | number | ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>
    type?: "button" | "reset" | "submit" | undefined;
    isDisabled?: boolean;
}

const Button: FC<ButtonProps> = ({
                                     colorType,
                                     children,
                                     onClick,
                                     type,
                                     isDisabled = false
                                 }) => {
    const color = colorType === "accept" ? s.accept : s.deny
    return (
        <button
            disabled={isDisabled}
            className={`${s.button} ${color}`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;