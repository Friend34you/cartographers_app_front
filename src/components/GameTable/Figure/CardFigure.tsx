import React, {useState} from 'react';
import Figure from "../../../models/Figure";
import Cell from "../Field/Cell/Cell";
import rotateLeftIcon from "./../../../static/rotate-left.png"

const CardFigure = () => {
    const mas = [
        [1, 0, 1],
        [1, 1, 1,],
        [1, 1, 1,]]
    const [figure, setFigure] = useState({cells: mas})
    const dragCell = {
        x: 0,
        y: 0,
        figure: figure.cells
    }
    function testHandle(e: React.MouseEvent) {
        const el = document.elementFromPoint(e.clientX, e.clientY);
        console.log("CAPTURE", el)
    }

    function rotateLeft(matrix: any) {
        return matrix[0].map((val: any, index: any) => matrix.map((row: any) => row[row.length - 1 - index]));
    }

    return (
        <section>
            <div style={{height: "30px", width: "30px", margin: "10px"}}
                 onClick={() => {
                     setFigure(prev => ({...prev, cells: rotateLeft(prev.cells)}))
                     console.log(figure)
                 }}
            >
                <img src={rotateLeftIcon} style={{width: "inherit"}}  alt=""/>
            </div>
            <div style={{width: "fit-content", height: "fit-content", border: "2px blue solid"}}

                 draggable={true}
                 onDragStart={(e: React.DragEvent) => {

                     console.log("start", e.dataTransfer.setData("data", JSON.stringify(dragCell)))
                 }}
            >
                {figure.cells.map((el, y) =>
                    <div>
                        {el.map((el, x) =>
                            <Cell type={figure.cells[y][x]} x={x} y={y} dragCell={dragCell}/>)}
                    </div>)}
            </div>
        </section>
    );
};

export default CardFigure;

//еслм y фигуры больше чем y поля - нельзя