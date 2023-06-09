import React, {FC, useEffect, useState} from 'react';
import s from "./ResearchCard.module.css"
import Card from "../Card";
import FigureComponent from "../../Figure/FigureComponent";
import Cell from "../../Field/Cell/Cell";
import defaultCard from "./../../../../static/mainImg.png"
import {CellTypes} from "../../../../utils/cellTypes";

interface ResearchCardProps {
    researchImage?: string;
    environment1: number;
    environment2: number | null;

    figureShape1: number[][] | null | undefined;
    figureShape2: number[][] | null | undefined;

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
    const isCardAnomaly = isAnomaly || !checkFieldSpace();
    // const [isCardAnomaly, toggleIsCardAnomaly] = useState(isAnomaly || !checkFieldSpace())
    const [figureEnvType, setFigureEnvType] = useState(environment1)
    console.log(figureEnvType)


    /** Если первый тип меняется, то ок, но если остаётся прежним, а до этого ещё был тип поля, фигуру которого выбрали,
     * то может произойти ситуация, кога не перерисовывается и это БАГ (надо тестить)**/
    useEffect(() => {
        if (!isCardAnomaly) {
            setFigureEnvType(environment1);
            console.log("обнова компонента ресёрч")
        } else {
            setFigureEnvType(CellTypes.FOREST)
            console.log("вышла аномалия")
        }
    }, [environment1, environment2, isCardAnomaly])

    function checkFieldSpace() {
        return true
    }

    /** Нужно разобраться м тем, что не отрисовыввается нормально элемент при изменении типа поля или фигуры **/
    if (isCardAnomaly)
        return (
            <div className={s.container}>
                <section className={s.interactions}>
                    <div className={s.cells_wrapper}>
                        <Cell type={CellTypes.FOREST} onClick={setFigureEnvType}/>
                        <Cell type={CellTypes.VILLAGE} onClick={setFigureEnvType}/>
                        <Cell type={CellTypes.FIELD} onClick={setFigureEnvType}/>
                        <Cell type={CellTypes.RIVER} onClick={setFigureEnvType}/>
                        <Cell type={CellTypes.MONSTER} onClick={setFigureEnvType}/>
                    </div>
                    <div className={s.figures_wrapper}>
                        {figureAvailable &&
                            <FigureComponent type={figureEnvType} shape={[[1]]}/>
                        }
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
                <div className={s.figures_wrapper}>
                    {figureShape1 && figureAvailable &&
                        <FigureComponent type={figureEnvType} shape={JSON.parse(JSON.stringify(figureShape1))}/>}
                    {figureShape2 && figureAvailable &&
                        <FigureComponent type={figureEnvType} shape={JSON.parse(JSON.stringify(figureShape2))}/>}
                </div>
            </section>
            <div className={s.card_wrapper}>
                <Card cardImage={researchImage}/>
            </div>
        </div>
    );
};

export default ResearchCard;