import React, {FC} from 'react';
import cellStyle from "./Cell.module.css"

interface CellProps {
    type: number;
    x?: number;
    y?: number;
    dragCell?: {
        x: number;
        y: number;
    }
}

const Cell: FC<CellProps> = ({type, x, y, dragCell}) => {

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
                const bla = e.dataTransfer.getData("string")
                console.log(JSON.parse(bla))
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