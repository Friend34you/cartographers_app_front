import React, {FC, useState} from 'react';
import Cell from "./Cell/Cell";
import fieldStyle from "./BoardComponent.module.css"
import Board from "../../../models/Board";

interface FieldProps {
    board: Board,
    setField: Function
}

const BoardComponent:FC<FieldProps> = ({board, setField}) => {
    function updateField() {
        const newField = board.getCopyBoard();
        console.log("копия", newField)
    }

    return (
        <div className={fieldStyle.field}>
            {board.cells.map((row: any, y: any) =>
                <React.Fragment>
                    {row.map((el: any, x: any) =>
                        <Cell
                            type={board.cells[y][x]}
                            field={board}
                            updateField={setField}
                            x={x}
                            y={y}
                        />
                    )}
                </React.Fragment>
            )}
        </div>
    );
};

export default BoardComponent;