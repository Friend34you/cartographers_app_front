import Cell from "./Cell";
import {CellTypes} from "../utils/cellTypes";


export default class Board {
    cells: number[][] = [];
    // cells: Cell[][] = [];

    // public initCells(): void {
    //     for (let i = 0; i < 11; i++) {
    //         const row: Cell[] = [];
    //         for (let j = 0; j < 11; j++) {
    //             row.push(new Cell(j, i, 0))
    //         }
    //         this.cells.push(row)
    //     }
    // }

    public initCells(): void {
        for (let i = 0; i < 11; i++) {
            const row: number[] = [];
            for (let j = 0; j < 11; j++) {
                row.push(0)
            }
            this.cells.push(row)
        }
        this.cells[1][3] = CellTypes.MOUNTAIN;
        this.cells[2][8] = CellTypes.MOUNTAIN;
        this.cells[5][5] = CellTypes.MOUNTAIN;
        this.cells[8][2] = CellTypes.MOUNTAIN;
        this.cells[8][1] = CellTypes.RUINS;
        this.cells[1][5] = CellTypes.RUINS;
        this.cells[2][1] = CellTypes.RUINS;
        this.cells[2][9] = CellTypes.RUINS;
        this.cells[8][9] = CellTypes.RUINS;
        this.cells[9][5] = CellTypes.RUINS;
        this.cells[9][7] = CellTypes.MOUNTAIN;
    }

    public getCopyBoard() {
        const newBoard = new Board();
        newBoard.cells = this.cells
        return newBoard;
    }

    public getCells() {
        console.log(this.cells)
    }
}