import React, {FC, useState} from 'react';
import s from "./Card.module.css";
import Modal from "../../common/Modal/Modal";
import defaultCard from "./../../../static/mainImg.png"
interface CardProps {
    cardImage?: string;
}


const Card:FC<CardProps> = ({cardImage = defaultCard }) => {
    const [cardModal, setCardModal] = useState(false)

    return (
        <>
            <div
                className={s.card}
                style={{backgroundImage: `url(${cardImage})`}}
                onClick={() => setCardModal(true)}
            />
            <Modal active={cardModal} setActive={setCardModal}>
                <img className={s.img} src={cardImage} alt=""/>
            </Modal>
        </>
    );
};

export default Card;