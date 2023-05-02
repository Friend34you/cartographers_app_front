import React, {FC} from 'react';
import modalStyle from "./Modal.module.css"
import "./Modal.module.css"

interface ModalProps {
    active: boolean;
    setActive: Function;
    children: string | JSX.Element | JSX.Element[]
}

const Modal: FC<ModalProps> = ({active, setActive, children}) => {
    const modalActive = `${modalStyle.modal} ${modalStyle.active}`;
    const closeModal = () => setActive(false);
    const contentClick = (e: React.MouseEvent<HTMLElement>) => e.stopPropagation();

    return (
        <div
            className={active ? modalActive : modalStyle.modal}
            onClick={closeModal}>
            <div className={modalStyle.modal__content} onClick={contentClick}>
                {children}
            </div>
        </div>
    );
};

export default Modal;