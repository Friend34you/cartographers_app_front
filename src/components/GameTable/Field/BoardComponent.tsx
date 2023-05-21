import React, {FC, useState} from 'react';
import Cell from "./Cell/Cell";
import fieldStyle from "./BoardComponent.module.css"
import Board from "../../../models/Board";
import BoardCell from "./Cell/BoardCell/BoardCell";

interface FieldProps {
    board: Board,
    updateBoard: Function
}

const BoardComponent:FC<FieldProps> = ({board, updateBoard}) => {
    return (
        <div className={fieldStyle.field}>
            {board.cells.map((row: any, y: any) =>
                <React.Fragment>
                    {row.map((el: any, x: any) =>
                        <BoardCell
                            type={board.cells[y][x]}
                            field={board}
                            updateBoard={updateBoard}
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