import React, {FC, useState} from 'react';
import s from "./ResearchCard.module.css"
import Card from "../Card";
import FigureComponent from "../../Figure/FigureComponent";
import Cell from "../../Field/Cell/Cell";
import defaultCard from "./../../../../static/mainImg.png"

interface ResearchCardProps {
    researchImage?: string;
    environment1: number;
    environment2?: number;

    figureShape1: number[][];
    figureShape2?: number[][];
}

const ResearchCard: FC<ResearchCardProps> = ({
                                                 researchImage = defaultCard,
                                                 figureShape1,
                                                 figureShape2,
                                                 environment1,
                                                 environment2
                                             }) => {

    const [figureEnvType, setFigureEnvType] = useState(environment1)

    return (
        <div
            className={s.container}
        >
            <section className={s.interactions}>
                <div className={s.cells_wrapper}>
                    {environment1 && <Cell type={environment1} onClick={setFigureEnvType}/>}
                    {environment2 && <Cell type={environment2} onClick={setFigureEnvType}/>}
                </div>
                <div className={s.figures_wrapper}>
                    {figureShape1 && <FigureComponent type={figureEnvType} shape={figureShape1}/>}
                    {figureShape2 && <FigureComponent type={figureEnvType} shape={figureShape2}/>}
                </div>
            </section>
            <div className={s.card_wrapper}>
                <Card cardImage={researchImage}/>
            </div>
        </div>
    );
};

export default ResearchCard;