import React, {FC, useState} from 'react';
import s from "./BoardComponent.module.css"
import Board from "../../../models/Board";
import BoardCell from "./Cell/BoardCell/BoardCell";

interface FieldProps {
    board: Board,
    updateBoard: Function
}

const BoardComponent:FC<FieldProps> = ({board, updateBoard}) => {
    return (
        <div className={s.field}>
            {board.cells.map((row: any, y: any) =>
                <React.Fragment key={y}>
                    {row.map((el: any, x: any) =>
                        <BoardCell
                            key={x}
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