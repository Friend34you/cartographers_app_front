import React, {FC, useState} from 'react';
import researchStyle from "./ResearchCard.module.css"
import Card from "../Card";
import FigureComponent from "../../Figure/FigureComponent";
import Cell from "../../Field/Cell/Cell";
import defaultCard from "./../../../../static/mainImg.png"

interface ResearchCardProps {
    researchImage?: string;
    environment1: number;
    environment2?: number;

    figure1: number[][];
    figure2?: number[][];
}

const ResearchCard: FC<ResearchCardProps> = ({
                                                 researchImage = defaultCard,
                                                 figure1,
                                                 figure2,
                                                 environment1,
                                                 environment2
                                             }) => {

    const [figureEnvType, setFigureEnvType] = useState(environment1)

    return (
        <div
            className={researchStyle.container}
        >
            <section className={researchStyle.interactions}>
                <div className={researchStyle.cells_wrapper}>
                    {environment1 && <Cell type={environment1} onClick={setFigureEnvType}/>}
                    {environment2 && <Cell type={environment2} onClick={setFigureEnvType}/>}
                </div>
                <div className={researchStyle.figures_wrapper}>
                    {figure1 && <FigureComponent type={figureEnvType}/>}
                    {figure1 && <FigureComponent type={figureEnvType}/>}
                </div>
            </section>
            <div className={researchStyle.card_wrapper}>
                <Card/>
            </div>
        </div>
    );
};

export default ResearchCard;