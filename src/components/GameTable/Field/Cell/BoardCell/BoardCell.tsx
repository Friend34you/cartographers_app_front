import React, {FC} from 'react';
import Cell from "../Cell";
import Board from "../../../../../models/Board";
import {setFigureOnField} from "../../../../../gameLogic/setFigureOnField";
import s from "./BoardCell.module.css";
interface BoardCellProps {
    x: number;
    y: number;
    type: number;
    field: Board;
    updateBoard: Function
}

const BoardCell:FC<BoardCellProps> = ({y, x, type, field, updateBoard}) => {

    return (
        <div
            onDragOver={(e: any) => {
                e.preventDefault()
            }}
            onDragLeave={(e: any) => {
                e.preventDefault()
            }}

            onDrop={(e:any)=>{
                e.preventDefault()
                console.log(e.target)
                let figureData = e.dataTransfer.getData("data")
                if (figureData) {
                    const data = JSON.parse(figureData)
                    field.cells = setFigureOnField(data.figure, data.x, data.y, field?.cells, x, y)
                    updateBoard()
                }
            }}

            className={s.cell}
        >
            <Cell type={type}/>
        </div>
    );
};

export default BoardCell;