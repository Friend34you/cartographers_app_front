import React from 'react';
import s from "./GameEnd.module.css"
import {gameAPI} from "../../../services/GameService";
import TaskCard from "../Card/TaskCard/TaskCard";
import Cell from "../Field/Cell/Cell";
import fieldImg from "../../../static/field.png";
import SeasonCard from "../Card/SeasonCard/SeasonCard";
import SeasonScore from "../SeasonScore/SeasonScore";
import {Link} from "react-router-dom";
import {ALL_ROOMS_ROUTE} from "../../../utils/routeConsts";
import Button from "../../common/Button/Button";


const GameEnd = () => {
    const {data, isLoading, isError, isSuccess, isFetching} = gameAPI.useGetGameEndQuery("", {
        refetchOnMountOrArgChange: true
    })
    const tasksLetters = ["A", "B", "C", "D"];
    const seasons = ["Весна", "Лето", "Осень", "Зима"]


    if (isSuccess) {
        console.log(data)
    }

    return (
        <div className={s.container}>
            {isSuccess &&
                <>
                    <section className={s.tasks_wrapper}>
                        <Link to={ALL_ROOMS_ROUTE}>
                            <Button colorType={"deny"} type={"button"}>Выйти</Button>
                        </Link>
                        <div>
                            {data.tasks.map((task, index) =>
                                <TaskCard key={index} letter={tasksLetters[index]} taskImage={task.image_url}/>
                            )}
                        </div>
                    </section>
                    <section>
                        <h2>Игроки</h2>
                        {data.player_results.map((player, index) =>
                            <div className={s.player_wrapper}>
                                <h3>{player.player.name}</h3>
                                <div className={s.seasons_wrapper}>
                                    <SeasonScore
                                        season={"Весна"}
                                        from_coins={player.seasons_score.spring_score.from_coins}
                                        monsters={player.seasons_score.spring_score.monsters}
                                        from_first_task={player.seasons_score.spring_score.from_first_task}
                                        from_second_task={player.seasons_score.spring_score.from_second_task}
                                        total={player.seasons_score.spring_score.total}
                                    />
                                    <SeasonScore
                                        season={"Лето"}
                                        from_coins={player.seasons_score.summer_score.from_coins}
                                        monsters={player.seasons_score.summer_score.monsters}
                                        from_first_task={player.seasons_score.summer_score.from_first_task}
                                        from_second_task={player.seasons_score.summer_score.from_second_task}
                                        total={player.seasons_score.summer_score.total}
                                    />
                                    <SeasonScore
                                        season={"Осень"}
                                        from_coins={player.seasons_score.fall_score.from_coins}
                                        monsters={player.seasons_score.fall_score.monsters}
                                        from_first_task={player.seasons_score.fall_score.from_first_task}
                                        from_second_task={player.seasons_score.fall_score.from_second_task}
                                        total={player.seasons_score.fall_score.total}
                                    />
                                    <SeasonScore
                                        season={"Зима"}
                                        from_coins={player.seasons_score.winter_score.from_coins}
                                        monsters={player.seasons_score.winter_score.monsters}
                                        from_first_task={player.seasons_score.winter_score.from_first_task}
                                        from_second_task={player.seasons_score.winter_score.from_second_task}
                                        total={player.seasons_score.winter_score.total}
                                    />
                                </div>
                                <div className={s.field}>
                                    {player.player_field.map((row, y) =>
                                        <React.Fragment key={y}>
                                            {row.map((el: any, x: any) =>
                                                <div className={s.cell}>
                                                    <Cell type={el}/>
                                                </div>
                                            )}
                                        </React.Fragment>
                                    )}
                                </div>
                                <img src={fieldImg} alt="Поле" className={s.field_img}/>
                            </div>
                        )}
                    </section>
                </>
            }
        </div>
    );
};

export default GameEnd;