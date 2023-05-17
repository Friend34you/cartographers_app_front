export default class Cell {
    readonly x: number;
    readonly y: number;
    type: number;


    constructor(x: number, y: number, type: number) {
        this.x = x;
        this.y = y;
        this.type = type;
    }
}