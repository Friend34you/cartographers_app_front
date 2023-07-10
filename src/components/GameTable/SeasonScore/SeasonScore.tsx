import React, {FC} from 'react';
import {ISeason} from "../../../models/ISeason";

interface SeasonScoreProps extends ISeason {
    season: string;
}

const SeasonScore: FC<SeasonScoreProps> = (
    {
        season,
        from_first_task,
        from_second_task,
        from_coins,
        monsters,
        total
    }
) => {

    return (
        <div>
            <h3>{season}</h3>
            <p>Задание 1: {from_first_task}</p>
            <p>Задание 2: {from_second_task}</p>
            <p>Монеты: {from_coins}</p>
            <p>Монстры: {monsters}</p>
            <p>За сезон: {total}</p>
        </div>
    );
};

export default SeasonScore;