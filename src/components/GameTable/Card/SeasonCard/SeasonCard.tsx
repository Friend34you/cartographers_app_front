import React, {FC, useState} from 'react';
import seasonStyle from "./SeasonCard.module.css"
import Card from "../Card";

interface SeasonCardProps {
    seasonImage?: string;
}

const SeasonCard: FC<SeasonCardProps> = ({seasonImage}) => {


    return (
        <div
            className={seasonStyle.container}
        >
            <Card/>
        </div>
    );
};

export default SeasonCard;