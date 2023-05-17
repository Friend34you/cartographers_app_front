import Cell from "./Cell";


export default class Board {
    cells: Cell[][] = [];

    public initCells(): void {
        for (let i = 0; i < 11; i++) {
            const row: Cell[] = [];
            for (let j = 0; j < 11; j++) {
                row.push(new Cell(j, i, 0))
            }
            this.cells.push(row)
        }
    }
}