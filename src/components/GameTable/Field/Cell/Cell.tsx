import React, {FC} from 'react';
import cellStyle from "./Cell.module.css"
import Board from "../../../../models/Board";
import {setFigureOnField} from "../../../../gameLogic/setFigureOnField";

interface CellProps {
    type: number;
    x?: number;
    y?: number;
    dragCell?: {
        x: number;
        y: number;
    }

    field?: Board;
    updateField?: Function
}

const Cell: FC<CellProps> = ({type,
                                 x,
                                 y,
                                 dragCell,
                             field,
                             updateField}) => {

    function testHandle(e:React.MouseEvent) {
        // const el = document.elementFromPoint(e.clientX, e.clientY);
        // console.log("CAPTURE",el)
        console.log(x)
        console.log(y)
        dragCell && (dragCell.x = x!);
        dragCell && (dragCell.y = y!)
        console.log(dragCell)
    }

    return (
        <div
            className={cellStyle.cell}
            onDrop={(e)=>{
                e.preventDefault()
                console.log(e.target)
                let figureData = e.dataTransfer.getData("data")
                const data = JSON.parse(figureData)

                setFigureOnField(data.figure, data.x, data.y, field?.cells, x, y)
                console.log("данные", data.figure, data.x, data.y, field?.cells, x, y)
                updateField!();

            }}
            onDragOver={(e: any) => {
                e.preventDefault()
                e.target.style.background = "grey"
            }}
            onDragLeave={(e: any) => {
                e.target.style.background = "transparent"
            }}
            onMouseDown={testHandle}
        >
            {type}
        </div>
    );
};

export default Cell;