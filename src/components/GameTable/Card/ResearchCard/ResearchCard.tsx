import React, {FC, useState} from 'react';
import s from "./ResearchCard.module.css"
import Card from "../Card";
import FigureComponent from "../../Figure/FigureComponent";
import Cell from "../../Field/Cell/Cell";
import defaultCard from "./../../../../static/mainImg.png"
import {CellTypes} from "../../../../utils/cellTypes";

interface ResearchCardProps {
    researchImage?: string;
    environment1: number;
    environment2?: number;

    figureShape1: number[][];
    figureShape2?: number[][];

    isAnomaly: boolean;
    figureAvailable: boolean;
}

const ResearchCard: FC<ResearchCardProps> = ({
                                                 researchImage = defaultCard,
                                                 figureShape1,
                                                 figureShape2,
                                                 environment1,
                                                 environment2,
                                                 isAnomaly,
                                                 figureAvailable
                                             }) => {

    const [figureEnvType, setFigureEnvType] = useState(environment1)

    function checkFieldSpace() {
        return true
    }

    /** Нужно разобраться м тем, что не отрисовыввается нормально элемент при изменении типа поля или фигуры **/
    if (isAnomaly || !checkFieldSpace())
        return (
            <div
                className={s.container}>
                <section className={s.interactions}>

                    <div className={s.cells_wrapper}>
                        <Cell type={CellTypes.FOREST} onClick={setFigureEnvType}/>
                        <Cell type={CellTypes.VILLAGE} onClick={setFigureEnvType}/>
                        <Cell type={CellTypes.RIVER} onClick={setFigureEnvType}/>
                        <Cell type={CellTypes.FIELD} onClick={setFigureEnvType}/>
                        <Cell type={CellTypes.MONSTER} onClick={setFigureEnvType}/>
                    </div>
                    <div className={s.figures_wrapper}>
                        <FigureComponent type={figureEnvType} shape={[[1]]} draggable={figureAvailable}/>
                    </div>
                </section>
                <div className={s.card_wrapper}>
                    <Card cardImage={researchImage}/>
                </div>
            </div>)

    return (
        <div className={s.container}>
            <section className={s.interactions}>

                <div className={s.cells_wrapper}>
                    {environment1 && <Cell type={environment1} onClick={setFigureEnvType}/>}
                    {environment2 && <Cell type={environment2} onClick={setFigureEnvType}/>}
                </div>
                <div className={figureAvailable ? s.figures_wrapper : `${s.figures_wrapper} ${s.disabled}`}>
                    {figureShape1 && <FigureComponent type={figureEnvType} shape={figureShape1} draggable={figureAvailable}/>}
                    {figureShape2 && <FigureComponent type={figureEnvType} shape={figureShape2} draggable={figureAvailable}/>}
                </div>
            </section>
            <div className={s.card_wrapper}>
                <Card cardImage={researchImage}/>
            </div>
        </div>
    );
};

export default ResearchCard;