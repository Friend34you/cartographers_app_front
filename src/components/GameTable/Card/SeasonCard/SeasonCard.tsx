import React, {FC, useState} from 'react';
import s from "./SeasonCard.module.css"
import Card from "../Card";

interface SeasonCardProps {
    seasonImage?: string;
}

const SeasonCard: FC<SeasonCardProps> = ({seasonImage}) => {


    return (
        <div
            className={s.container}
        >
            <Card cardImage={seasonImage}/>
        </div>
    );
};

export default SeasonCard;