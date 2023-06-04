import {CellTypes} from "../utils/cellTypes";

export const mockBoard = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, CellTypes.MOUNTAIN, 0, CellTypes.RUINS, 0, 0, 0, 0, 0],
    [0, CellTypes.RUINS, 0, 0, 0, 0, 0, 0, CellTypes.MOUNTAIN, CellTypes.RUINS, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, CellTypes.MOUNTAIN, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, CellTypes.RUINS, CellTypes.MOUNTAIN, 0, 0, 0, 0, 0, 0, CellTypes.RUINS, 0],
    [0, 0, 0, 0, 0, CellTypes.RUINS, 0, CellTypes.MOUNTAIN, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]