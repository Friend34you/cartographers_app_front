export function setFigureOnField(figure: any,
                                 figCellX: any,
                                 figCellY: any,
                                 field: any,
                                 fieldCellX: any,
                                 fieldCellY: any) {

    let newField = field
    let Y = fieldCellY - figCellY;
    let X = fieldCellX - fieldCellX;
    for (let i = Y; i <= figure.length - 1; i++) {
        console.log(i)
        console.log(figure.length - 1)
        for (let j = X; j <= figure[0].length - 1; j++) {
            console.log("фигу,", figure[i][j])
            newField[i][j] = figure[i][j];
            console.log("поле", newField[i][j])
        }
    }
    return newField
}

