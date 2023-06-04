export interface IGame {
    "room_name": string,
    "field": number[][],
    "seasons": {
        "spring": string,
        "summer": string,
        "autumn": string,
        "winter": string
    },
    "current_season": string,
    "player_scores": [
        1,2,3,4
    ],
    "card": {
        "picture": string,
        "figure": number[][],
        "other_figure": number[][]
    },
    "onRuins": boolean,
    "coins": number,
    "score": number
}