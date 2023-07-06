import {IPlayer} from "./IPlayer";
import {ITask} from "./ITask";

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
    "tasks": {
        "first": ITask;
        "second": ITask;
        "third": ITask;
        "fourth": ITask;
    },
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
        "spring_score": IGame;
        "summer_scores": IGame;
        "fall_score": IGame;
        "winter_score": IGame;
    };
    "player_coins": number,
    "player_score": number
}