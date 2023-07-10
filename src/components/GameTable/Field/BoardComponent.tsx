import React, {FC, useState} from 'react';
import s from "./BoardComponent.module.css"
import Board from "../../../models/Board";
import BoardCell from "./Cell/BoardCell/BoardCell";

interface FieldProps {
    board: Board;
    updateBoard: Function;
    isOnRuins: boolean
}

const BoardComponent:FC<FieldProps> = ({board, updateBoard, isOnRuins}) => {
    return (
        <div className={s.field}>
            {board.cells.map((row, y) =>
                <React.Fragment key={y}>
                    {row.map((el, x) =>
                        <BoardCell
                            key={x}
                            type={board.cells[y][x]}
                            field={board}
                            updateBoard={updateBoard}
                            x={x}
                            y={y}
                            isOnRuins={isOnRuins}
                        />
                    )}
                </React.Fragment>
            )}
        </div>
    );
};

export default BoardComponent;