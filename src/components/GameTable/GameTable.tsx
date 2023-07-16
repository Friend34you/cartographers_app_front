import React, {FC, useEffect, useState} from 'react';
import {Navigate, useNavigate} from "react-router-dom";
import s from "./GameTable.module.css"
import backgroundSound from "./../../static/sounds/backgroundMusic/cool adventure music.mp3"
import playersIcon from "../../static/players.svg"
import fieldImg from "../../static/field.png"
import {ALL_ROOMS_ROUTE, GAME_END_ROUTE} from "../../utils/routeConsts";
import {gameAPI} from "../../services/GameService";
import Board from "../../models/Board";
import Button from "../common/Button/Button";
import BoardComponent from "./Field/BoardComponent";
import TaskCard from "./Card/TaskCard/TaskCard";
import SeasonCard from "./Card/SeasonCard/SeasonCard";
import ResearchCard from "./Card/ResearchCard/ResearchCard";
import Player from "../common/Player/Player";
import Loader from "../common/Loader/Loader";
import Modal from "../common/Modal/Modal";
import UserIcon from "../common/UserIcon/UserIcon";

//test images
import task1 from "./../../static/для отчёта/img.png"
import task2 from "./../../static/для отчёта/img_1.png"
import task3 from "./../../static/для отчёта/img_2.png"
import task4 from "./../../static/для отчёта/img_3.png"
import {GameStatusTypes} from "../../utils/gameStatusTypes";
import Background from "../common/Background/Background";


const GameTable: FC = () => {
        const {
            data: gameData,
            isLoading: isGameDataLoading,
            isError: isGameDataError,
            isSuccess: isGameDataSuccess,
            isFetching: isGameDataFetching,
            refetch
        } = gameAPI.useGetGameTurnQuery("", {
            refetchOnMountOrArgChange: true,
        });
        const [leaveGame,
            {
                isLoading: isLeaveGameLoading,
                isSuccess: isLeaveGameSuccess,
                isError: isLeaveGameError
            }] = gameAPI.useLeaveGameMutation();
        // const [checkNewTurn,
        //     {
        //         data: checkNewTurnData,
        //         isSuccess: isCheckTurnSuccess,
        //         isLoading: isCheckTurnLoading
        //     }] = gameAPI.useCheckNewTurnMutation();
        const [checkGameStatus,
            {
                data: checkGameStatusData,
                isSuccess: isCheckGameStatusSuccess,
                isLoading: isCheckGameStatusLoading
            }] = gameAPI.useCheckGameStatusMutation();
        const [endTurn, {isLoading: isEndTurnLoading}] = gameAPI.useEndTurnMutation();

        const navigate = useNavigate()
        const [board, setBoard] = useState(new Board())
        const [figureAvailable, setFigureAvailable] = useState(true)
        const [modalActive, setModalActive] = useState(false)
        const [isButtonDisabled, setButtonDisabled] = useState(false)

        useEffect(() => {
            if (isGameDataSuccess) {

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
            if (isGameDataSuccess) {
                const newBoard = new Board();
                newBoard.cells = board.cells;
                setBoard(newBoard);
                if (JSON.stringify(board.cells) !== JSON.stringify(gameData.player_field)) {
                    setFigureAvailable(false)
                }
            }
        }

        function denyBoardChanges() {
            if (isGameDataSuccess) {
                const newBoard = new Board();
                newBoard.cells = JSON.parse(JSON.stringify(gameData.player_field));
                setBoard(newBoard);
                setFigureAvailable(true);
            }
        }

        /** Обработать возможность выпадения ошибки!!! **/
        async function handleEndTurn() {
            if (figureAvailable) {
                console.log("lox, postav' figuru")
                return;
            }
            setButtonDisabled(true);
            await endTurn(board.cells);

            console.log("try to find time");
            const timerId = setInterval(async () => {
                const checkNewTurnRes = await checkGameStatus();

                if ("data" in checkNewTurnRes && checkNewTurnRes.data === GameStatusTypes.gameFinished) {
                    clearInterval(timerId);
                    navigate(GAME_END_ROUTE);
                }
                if ("data" in checkNewTurnRes && checkNewTurnRes.data === GameStatusTypes.newMoveStarted) {
                    await refetch();
                    clearInterval(timerId);
                    setButtonDisabled(false);
                }
            }, 3000)
        }

        async function handleLeaveGame() {
            await leaveGame();
        }

        function handleModal() {
            setModalActive(!modalActive)
        }

        if (isCheckGameStatusSuccess) {
            console.log(checkGameStatusData);
        }

        if (isGameDataSuccess) {
            console.log(gameData);
        }

        return (<>
            {isGameDataLoading && <Loader sidePxSize={100}/>}
            {isGameDataError && <div>Error</div>}
            {isGameDataSuccess &&
                <>
                    <div className={s.container}>
                        <section className={s.field_wrapper}>
                            <h1>{gameData.room_name}</h1>
                            <h2>{gameData.is_on_ruins.toString()}</h2>
                            <BoardComponent board={board} updateBoard={updateBoard} isOnRuins={gameData.is_on_ruins}/>
                            <img src={fieldImg} alt="" className={s.field_img}/>

                        </section>
                        <section className={s.interactions_wrapper}>
                            <div className={s.season}>
                                <div className={s.tasks}>
                                    <TaskCard letter={"A"} taskImage={gameData.tasks[0].image_url}/>
                                    <TaskCard letter={"B"} taskImage={gameData.tasks[1].image_url}/>
                                    <TaskCard letter={"C"} taskImage={gameData.tasks[2].image_url}/>
                                    <TaskCard letter={"D"} taskImage={gameData.tasks[3].image_url}/>
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
                                          isAnomaly={gameData.discovery_card.is_anomaly}
                                          figureAvailable={figureAvailable}
                            />
                            <div className={s.turn_buttons_wrapper}>
                                <Button colorType={"deny"} type={"button"}
                                        onClick={denyBoardChanges}
                                        isDisabled={isButtonDisabled}
                                >
                                    Отменить действие
                                </Button>
                                <Button colorType={"accept"} type={"button"} onClick={() => {
                                    checkGameStatus()
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
                                <Button colorType={"accept"} type={"button"}
                                        onClick={handleEndTurn}
                                        isDisabled={isButtonDisabled}
                                >
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
                    <Background season={gameData.current_season_name}/>
                </>}
        </>);

    }
;

export default GameTable;