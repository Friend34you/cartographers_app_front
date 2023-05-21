import React, {FC, useEffect, useState} from 'react';
import gameTableStyle from "./GameTable.module.css"
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
import backgroundSound from "./../../static/sounds/backgroundMusic/romantic music.mp3"
import Player from "../common/Player/Player";


const GameTable: FC = () => {
    const [board, setBoard] = useState(new Board())
    useEffect(() => {
        restart()
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

    return (
        <div className={gameTableStyle.container}>
            <section className={gameTableStyle.field_wrapper}>
                <h1>Название игры</h1>
                <BoardComponent board={board} updateBoard={updateBoard}/>
                <img src={fieldImg} alt="" className={gameTableStyle.field_img}/>
            </section>
            <section className={gameTableStyle.interactions_wrapper}>
                <div className={gameTableStyle.season}>
                    <div className={gameTableStyle.tasks}>
                        <TaskCard letter={"A"}/>
                        <TaskCard letter={"B"}/>
                        <TaskCard letter={"C"}/>
                        <TaskCard letter={"D"}/>
                    </div>
                    <SeasonCard/>
                    <section className={gameTableStyle.buttons_wrapper}>
                        <Link to={ALL_ROOMS_ROUTE}>
                            <Button colorType={"deny"} type={"button"}>
                                Выйти
                            </Button>
                        </Link>
                        <Player url={backgroundSound}/>
                        <img className={gameTableStyle.playersIcon} src={playersIcon} alt="игроки"/>
                    </section>
                </div>
                {/*<FigureComponent/>*/}
                <ResearchCard environment1={3} environment2={4} figure1={[[1, 0, 1, 0], [1, 1, 1, 1]]}/>
                <div className={gameTableStyle.turn_buttons_wrapper}>
                    <Button colorType={"deny"} type={"button"}>
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