import React, {FC, useEffect, useState} from 'react';
import s from "./GameTable.module.css"
import playersIcon from "../../static/players.svg"
import fieldImg from "../../static/field.png"
import {Link, Navigate} from "react-router-dom";
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
import {gameAPI} from "../../services/GameService";
import Loader from "../common/Loader/Loader";
import Modal from "../common/Modal/Modal";
import UserIcon from "../common/UserIcon/UserIcon";


const GameTable: FC = () => {
        const {data: gameData, isLoading, isError, isSuccess, isFetching, refetch} = gameAPI.useGetGameTurnQuery("", {
            refetchOnMountOrArgChange: true,
        });
        const [leaveGame,
            {
                isLoading: isLeaveGameLoading,
                isSuccess: isLeaveGameSuccess,
                isError: isLeaveGameError
            }] = gameAPI.useLeaveGameMutation();
        const [checkNewTurn, {data: checkTurnData, isSuccess: isCheckTurnSuccess}] = gameAPI.useCheckNewTurnMutation();
        const [endTurn, {}] = gameAPI.useEndTurnMutation();

        const [board, setBoard] = useState(new Board())
        const [figureAvailable, setFigureAvailable] = useState(true)
        const [modalActive, setModalActive] = useState(false)

        useEffect(() => {
            if (isSuccess) {

                restart();
                console.log("поле поменялось")
                denyBoardChanges();
            }
        }, [gameData])

        function restart() {
            const newBoard = new Board();
            newBoard.initCells();
            setBoard(newBoard)
        }

        function updateBoard() {
            if (isSuccess) {
                const newBoard = new Board();
                newBoard.cells = board.cells;
                setBoard(newBoard);
                if (JSON.stringify(board.cells) !== JSON.stringify(gameData.player_field)) {
                    setFigureAvailable(false)
                }
                console.log(board)
            }
        }

        function denyBoardChanges() {
            if (isSuccess) {
                const newBoard = new Board();
                newBoard.cells = JSON.parse(JSON.stringify(gameData.player_field));
                console.log(gameData.player_field)
                setBoard(newBoard);
                setFigureAvailable(true);
            }
        }

        async function handleEndTurn() {
            await endTurn(board.cells);
        }

        async function handleLeaveGame() {
            await leaveGame();
        }

        function handleModal() {
            setModalActive(!modalActive)
        }

        if (checkTurnData) {
            console.log(checkTurnData);
        }

        if (isSuccess) {
            console.log(gameData);
        }

        // if (isFetching) {
        //     return (<Loader sidePxSize={100}/>)
        // }

        return (<>
            {isLoading && <Loader sidePxSize={100}/>}
            {isError && <div>Error</div>}
            {isSuccess &&
                <>
                    <div className={s.container}>
                        <section className={s.field_wrapper}>
                            <h1>{gameData.room_name}</h1>
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
                                <SeasonCard seasonImage={gameData.seasons[gameData.current_season_name]}/>
                                <section className={s.buttons_wrapper}>
                                    {isLeaveGameSuccess && <Navigate to={ALL_ROOMS_ROUTE}/>}
                                    <Button colorType={"deny"} type={"button"} onClick={handleLeaveGame}>
                                        Выйти
                                    </Button>
                                    <Player url={backgroundSound}/>
                                    <img className={s.playersIcon} src={playersIcon} alt="игроки" onClick={handleModal}/>
                                </section>
                            </div>
                            <ResearchCard environment1={gameData.discovery_card.terrain_int!}
                                          environment2={gameData.discovery_card.additional_terrain_int}
                                          figureShape1={gameData.discovery_card.shape?.shape_value}
                                          figureShape2={gameData.discovery_card.additional_shape?.shape_value}
                                          researchImage={gameData.discovery_card.image}
                                          isAnomaly={false}
                                          figureAvailable={figureAvailable}
                            />
                            <div className={s.turn_buttons_wrapper}>
                                <Button colorType={"deny"} type={"button"} onClick={denyBoardChanges}>
                                    Отменить действие
                                </Button>
                                <Button colorType={"accept"} type={"button"} onClick={() => {
                                    checkNewTurn()
                                }}>
                                    Проверка на новый ход
                                </Button>
                                <Button colorType={"accept"} type={"button"}
                                        onClick={() => {
                                            refetch();
                                            // setFigureAvailable(true);
                                        }}>
                                    Рефетч
                                </Button>
                                <Button colorType={"accept"} type={"button"} onClick={handleEndTurn}>
                                    Закончить ход
                                </Button>
                            </div>
                        </section>
                    </div>
                    <Modal active={modalActive} setActive={setModalActive}>
                        <div className={s.userList}>
                            {gameData!.players.map((player) =>
                                <div className={s.userItem}>
                                    <div className={s.userItem__info}>
                                        <UserIcon/>
                                        <span>{player.name}</span>
                                    </div>
                                    <span>{player.score}</span>
                                </div>
                            )}
                        </div>
                    </Modal>
                </>}
        </>);

    }
;

export default GameTable;