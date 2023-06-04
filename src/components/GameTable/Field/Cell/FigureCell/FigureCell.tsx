import React, {FC} from 'react';
import Cell from "../Cell";
import s from "./FigureCell.module.css";

interface FigureCellProps {
    x: number;
    y: number;
    dragCell: {
        x: number;
        y: number;
    },
    type: number;
}

const FigureCell:FC<FigureCellProps> = ({dragCell, y, x, type}) => {
    function getCellCoordinates(e:React.MouseEvent) {
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
            draggable={false}
            onMouseDown={getCellCoordinates}
            className={type !== 0
                ? `${s.cell} ${s.filled}`
                : s.cell}
        >
            <Cell type={type}/>
        </div>
    );
};

export default FigureCell;