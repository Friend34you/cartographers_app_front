import React, {FC} from 'react';
import Button from "../common/Button/Button";
import playersIcon from "../../static/players.svg"
import field from "../../static/field.png"
import {Link} from "react-router-dom";
import {ALL_ROOMS_ROUTE} from "../../utils/consts";

const GameTable:FC = () => {
    return (
        <div>
            <Link to={ALL_ROOMS_ROUTE}>
                <Button colorType={"deny"} type={"button"}>
                    Выйти
                </Button>
            </Link>
            <section>
                <h1>Название игры</h1>
                <img src={field} alt=""/>
            </section>
            <section>
                <img src={playersIcon} alt="игроки"/>
                <div>
                    Задания тут
                </div>
            </section>
        </div>
    );
};

export default GameTable;