import {IPlayer} from "./IPlayer";
import {ITask} from "./ITask";
import {ISeason} from "./ISeason";

export interface IGame {
    "id": number;
    "room_name": string;
    "player_field": number[][];
    "seasons": {
        "spring": string;
        "summer": string;
        "autumn": string;
        "winter": string;
    },
    "tasks": ITask[],
    "current_season_name": "spring" | "summer" | "autumn" | "winter";
    "players": IPlayer[]
    "discovery_card": {
        "image": string;
        "is_anomaly": boolean;
        "terrain_int": null | number;
        "additional_terrain_int": null | number;
        "shape": null | {
            "shape_value": number[][];
            "gives_coin": boolean;
        };
        "additional_shape": null | {
            "shape_value": number[][];
            "gives_coin": boolean;
        };
    },
    "is_on_ruins": boolean;
    "season_scores": {
        "spring_score": ISeason;
        "summer_scores": ISeason;
        "fall_score": ISeason;
        "winter_score": ISeason;
    };
    "player_coins": number,
    "player_score": number
}