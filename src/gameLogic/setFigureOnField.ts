import {soundClick} from "./soundClick";
import {CellTypes} from "../utils/cellTypes";

export function setFigureOnField(figure: number[][],
                                 figureCellX: number,
                                 figureCellY: number,
                                 field: number[][],
                                 fieldCellX: number,
                                 fieldCellY: number,
                                 onRuins: boolean = false): number[][] {

    const newField = [...field]
    //Координаты "начала массива фигуры",т.е если взялись за послежнюю клетку фигуры,
    // то при выставлении возьмутся координаты верхней левой клетки
    const firstY = fieldCellY - figureCellY;
    const firstX = fieldCellX - figureCellX;
    console.log("Y", firstY)
    console.log("X", firstX)
    let figureRow = 0;
    let figureCol = 0;

    //Проверки на выход за границы поля
    if (firstY < 0 || firstX < 0) return newField
    if (figure.length + firstY - 1 > 10) return newField
    if (figure[0].length + firstX - 1 > 10) return newField

    //Проверка на наложение блоков
    for (let i = firstY; i <= figure.length + firstY - 1; i++) {
        for (let j = firstX; j <= figure[0].length + firstX - 1; j++) {
            if (newField[i][j] !== CellTypes.EMPTY && newField[i][j] !== CellTypes.RUINS) {
                if (figure[figureCol][figureRow] !== CellTypes.EMPTY) {
                    console.log(newField[i][j]);
                    console.log("нельзя выставить");
                    return newField
                }
            }
            figureRow++
        }
        figureCol++
        figureRow = 0;
    }

    //Проверка на руины
    figureRow = 0;
    figureCol = 0;
    if (onRuins) {
        let ruinsCount = 0;
        for (let i = firstY; i <= figure.length + firstY - 1; i++) {
            for (let j = firstX; j <= figure[0].length + firstX - 1; j++) {
                if (figure[figureCol][figureRow] !== CellTypes.EMPTY) {
                    if (newField[i][j] === CellTypes.RUINS) {
                        ruinsCount++
                        console.log(newField[i][j]);
                    }
                }
                figureRow++
            }
            figureCol++
            figureRow = 0;
        }
        if (ruinsCount === 0) {
            console.log("Нужно разместить на руинах")
            return newField
        }
    }

    //Алгоритм выставления
    figureRow = 0;
    figureCol = 0;
    for (let i = firstY; i <= figure.length + firstY - 1; i++) {
        for (let j = firstX; j <= figure[0].length + firstX - 1; j++) {
            if (figure[figureCol][figureRow] !== CellTypes.EMPTY) {
                newField[i][j] = figure[figureCol][figureRow];
            }
            console.log("row", figureRow)
            figureRow++
        }
        console.log("coll", figureCol)
        figureCol++
        figureRow = 0;
    }
    soundClick();
    return newField
}

