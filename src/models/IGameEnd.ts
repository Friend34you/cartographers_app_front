import {ITask} from "./ITask";
import {IPlayerGameResult} from "./IPlayerGameResult";

export interface IGameEnd {
    "tasks": ITask[],
    "player_results": IPlayerGameResult[]
}