import {CellTypes} from "../utils/cellTypes";

export function checkCoinsCount(board: number[][], Y: number, X: number): number {
    let coinsCount = 0;
    for (let i = 0; i < Y; i++) {
        for (let j = 0; j < X; j++) {
            if (board[i][j] === CellTypes.MOUNTAIN) {
                if (board[i + 1][j] === CellTypes.RUINS || board[i + 1][j] === CellTypes.EMPTY) continue;
                if (board[i][j + 1] === CellTypes.RUINS || board[i][j + 1] === CellTypes.EMPTY) continue;
                if (board[i - 1][j] === CellTypes.RUINS || board[i - 1][j] === CellTypes.EMPTY) continue;
                if (board[i][j - 1] === CellTypes.RUINS || board[i][j - 1] === CellTypes.EMPTY) continue;
                coinsCount++
            }
        }
    }
    return coinsCount
}