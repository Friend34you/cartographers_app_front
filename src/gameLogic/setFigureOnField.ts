export function setFigureOnField(figure: any,
                                 figureCellX: any,
                                 figureCellY: any,
                                 field: any,
                                 fieldCellX: any,
                                 fieldCellY: any) {

    const newField = field
    const Y = fieldCellY - figureCellY;
    const X = fieldCellX - figureCellX;
    let figureRow = 0;
    let figureCol = 0;

    for (let i = Y; i <= figure.length + Y - 1; i++) {
        for (let j = X; j <= figure[0].length + X - 1; j++) {
            newField[i][j] = figure[figureCol][figureRow];
            console.log("row", figureRow)
            figureRow++
        }
        console.log("coll", figureCol)
        figureCol++
        figureRow = 0;
    }
    return newField
}

