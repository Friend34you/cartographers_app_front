import React, {FC, useEffect, useState} from 'react';
import s from "./GameTable.module.css"
import playersIcon from "../../static/players.svg"
import fieldImg from "../../static/field.png"
import {Link} from "react-router-dom";
import {ALL_ROOMS_ROUTE} from "../../utils/consts";
import Button from "../common/Button/Button";
import Board from "../../models/Board";
import BoardComponent from "./Field/BoardComponent";
import TaskCard from "./Card/TaskCard/TaskCard";
import SeasonCard from "./Card/SeasonCard/SeasonCard";
import ResearchCard from "./Card/ResearchCard/ResearchCard";
import backgroundSound from "./../../static/sounds/backgroundMusic/cool adventure music.mp3"
import Player from "../common/Player/Player";

//test images
import task1 from "./../../static/для отчёта/img.png"
import task2 from "./../../static/для отчёта/img_1.png"
import task3 from "./../../static/для отчёта/img_2.png"
import task4 from "./../../static/для отчёта/img_3.png"
import expl from "./../../static/для отчёта/explorationCard.png"
import season from "./../../static/для отчёта/season.png"


const GameTable: FC = () => {
    const [board, setBoard] = useState(new Board())
    const previousTurnBoardMock = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]

    useEffect(() => {
        restart();
    }, [])

    function restart() {
        const newBoard = new Board();
        newBoard.initCells();
        newBoard.cells[1][3] = 5;
        setBoard(newBoard)
    }

    function updateBoard() {
        const newBoard = new Board();
        newBoard.cells = board.cells;
        setBoard(newBoard)
    }

    function denyBoardChanges() {
        const newBoard = new Board();
        newBoard.cells = previousTurnBoardMock;
        setBoard(newBoard)
    }

    return (
        <div className={s.container}>
            <section className={s.field_wrapper}>
                <h1>Название игры</h1>
                <BoardComponent board={board} updateBoard={updateBoard}/>
                <img src={fieldImg} alt="" className={s.field_img}/>
            </section>
            <section className={s.interactions_wrapper}>
                <div className={s.season}>
                    <div className={s.tasks}>
                        <TaskCard letter={"A"} taskImage={task1}/>
                        <TaskCard letter={"B"} taskImage={task2}/>
                        <TaskCard letter={"C"} taskImage={task3}/>
                        <TaskCard letter={"D"} taskImage={task4}/>
                    </div>
                    <SeasonCard seasonImage={season}/>
                    <section className={s.buttons_wrapper}>
                        <Link to={ALL_ROOMS_ROUTE}>
                            <Button colorType={"deny"} type={"button"}>
                                Выйти
                            </Button>
                        </Link>
                        <Player url={backgroundSound}/>
                        <img className={s.playersIcon} src={playersIcon} alt="игроки"/>
                    </section>
                </div>
                <ResearchCard environment1={2} environment2={3} figureShape1={[[1, 0, 1, 0], [1, 1, 1, 1]]}
                              researchImage={expl}/>
                <div className={s.turn_buttons_wrapper}>
                    <Button colorType={"deny"} type={"button"}
                            onClick={denyBoardChanges}
                    >
                        Отменить действие
                    </Button>
                    <Button colorType={"accept"} type={"button"}>
                        Закончить ход
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default GameTable;