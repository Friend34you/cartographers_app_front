import React, {useState} from 'react';
import Figure from "../../../models/Figure";
import rotateLeftIcon from "./../../../static/rotate-left.png"
import FigureCell from "../Field/Cell/FigureCell/FigureCell";
import cardFigureStyle from "./CardFigure.module.css"

const CardFigure = () => {
    const mas = [
        [3, 0, 3],
        [3, 3, 3,],
        [3, 0, 3,]]
    const [figure, setFigure] = useState(new Figure(mas))
    const dragCell = {
        x: 0,
        y: 0,
        figure: figure.cells
    }

    function updateFigure() {
        const newFigure = new Figure(figure.cells);
        newFigure.cells = rotateLeft(newFigure.cells);
        setFigure(newFigure)
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
                     updateFigure()
                 }}
            >
                <img draggable={"false"} src={rotateLeftIcon} style={{width: "inherit"}} alt=""/>
            </div>
            <div style={{width: "fit-content", height: "fit-content"}}

                 draggable={true}
                 onDragStart={(e: React.DragEvent) => {
                     e.dataTransfer.setData("data", JSON.stringify(dragCell))
                 }}
            >
                {figure.cells.map((row, y) =>
                    <div className={cardFigureStyle.row}>
                        {row.map((el, x) =>
                            <FigureCell type={figure.cells[y][x]} x={x} y={y} dragCell={dragCell}/>)}
                    </div>)}
            </div>
        </section>
    );
};

export default CardFigure;

//еслм y фигуры больше чем y поля - нельзя