import React, {FC, useEffect, useState} from 'react';
import Button from "../common/Button/Button";
import playersIcon from "../../static/players.svg"
import fieldImg from "../../static/field.png"
import {Link} from "react-router-dom";
import {ALL_ROOMS_ROUTE} from "../../utils/consts";
import TaskCard from "./Card/TaskCard/TaskCard";
import gameTableStyle from "./GameTable.module.css"
import Card from "./Card/Card";
import BoardComponent from "./Field/BoardComponent";
import CardFigure from "./Figure/CardFigure";
import Board from "../../models/Board";

const GameTable: FC = () => {
    const [field, setField] = useState(new Board())

    useEffect(() => {
        const newField = new Board();
        newField.initCells();
        newField.cells[0][0] = 1;
        setField(newField)
    }, [])


    return (
        <div className={gameTableStyle.container}>
            <section className={gameTableStyle.field_wrapper}>
                <h1>Название игры</h1>
                <BoardComponent board={field} setField={setField}/>
                <img src={fieldImg} alt="" className={gameTableStyle.field_img}/>
            </section>
            <section className={gameTableStyle.interactions_wrapper}>
                <div className={gameTableStyle.season}>
                    <Card/>
                    <section className={gameTableStyle.buttons_wrapper}>
                        <Link to={ALL_ROOMS_ROUTE}>
                            <Button colorType={"deny"} type={"button"}>
                                Выйти
                            </Button>
                        </Link>
                        <img className={gameTableStyle.playersIcon} src={playersIcon} alt="игроки"/>
                    </section>
                </div>
                <div className={gameTableStyle.tasks}>
                    <TaskCard letter={"A"}/>
                    <TaskCard letter={"B"}/>
                    <TaskCard letter={"C"}/>
                    <TaskCard letter={"D"}/>
                </div>
                <CardFigure/>
            </section>
        </div>
    );
};

export default GameTable;