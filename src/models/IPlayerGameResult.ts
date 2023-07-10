import {IPlayer} from "./IPlayer";
import {ISeason} from "./ISeason";

export interface IPlayerGameResult {
    "player": IPlayer;
    "player_field": number[][];
    "seasons_score": {
        "spring_score": ISeason;
        "summer_score": ISeason;
        "fall_score": ISeason;
        "winter_score": ISeason;
    }
}