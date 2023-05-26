import React, {FC, useEffect} from 'react';
import s from "./Modal.module.css"
import close from "./../../../static/close2.png"

interface ModalProps {
    active: boolean;
    setActive: Function;
    children: string | JSX.Element | JSX.Element[]
}

const Modal: FC<ModalProps> = ({active, setActive, children}) => {
    const modalActive = `${s.modal} ${s.active}`;
    const closeModal = () => setActive(false);
    const contentClick = (e: React.MouseEvent<HTMLElement>) => e.stopPropagation();

    function escFunction(e:KeyboardEvent){
        if (e.key === "Escape") {
            closeModal()
        }
    }

    useEffect(() => {

        document.addEventListener("keydown", escFunction, false);
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        }
    }, [])

    return (
        <div
            className={active ? modalActive : s.modal}
        >
            <div className={s.modal__content} onClick={contentClick}>
                <img
                    className={s.close}
                    src={close}
                    alt=""
                    onClick={closeModal}
                />
                {children}
            </div>
        </div>
    );
};

export default Modal;