export function setFigureOnField(figure: number[][],
                                 figureCellX: number,
                                 figureCellY: number,
                                 field: number[][],
                                 fieldCellX: number,
                                 fieldCellY: number) {

    const newField = [...field]
    const firstY = fieldCellY - figureCellY;
    const firstX = fieldCellX - figureCellX;
    console.log("Y", firstY)
    console.log("X", firstX)
    let figureRow = 0;
    let figureCol = 0;


    if (firstY < 0 || firstX < 0) return newField
    if (figure.length + firstY - 1 > 10) return newField
    if (figure[0].length + firstX - 1 > 10) return newField

    for (let i = firstY; i <= figure.length + firstY - 1; i++) {
        for (let j = firstX; j <= figure[0].length + firstX - 1; j++) {
            if (newField[i][j] !== 0) {
                if (figure[figureCol][figureRow] !== 0) {
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


    figureRow = 0;
    figureCol = 0;

    for (let i = firstY; i <= figure.length + firstY - 1; i++) {
        for (let j = firstX; j <= figure[0].length + firstX - 1; j++) {

            if (figure[figureCol][figureRow] !== 0) {
                newField[i][j] = figure[figureCol][figureRow];
            }
            console.log("row", figureRow)
            figureRow++
        }
        console.log("coll", figureCol)
        figureCol++
        figureRow = 0;
    }
    return newField
}

