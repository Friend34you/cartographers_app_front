import React, {FC, useEffect, useState} from 'react';
import Figure from "../../../models/Figure";
import FigureCell from "../Field/Cell/FigureCell/FigureCell";
import s from "./FigureComponent.module.css"
import rotateLeftIcon from "./../../../static/rotate-left.png"
import invertV from "./../../../static/invertVertical2.png"
import invertH from "./../../../static/invertHorizontal2.png"
import InteractiveIconButton from "../../common/InteractiveIconButton/InteractiveIconButton";

interface FigureProps {
    type: number;
    shape: number[][];
}

const FigureComponent: FC<FigureProps> = ({type, shape}) => {
    let mas = [[0, 0, 0]]
    const [figure, setFigure] = useState(new Figure(mas))
    const dragCell = {
        x: 0,
        y: 0,
        figure: figure.cells
    }

    useEffect(() => {
        mas = fillTypeToFigure(shape, type);
        updateFigure(mas)
        console.log(mas)
    }, [type, shape])

    function updateFigure(mas: number[][]) {
        const newFigure = new Figure(mas);
        setFigure(newFigure)
    }

    function fillTypeToFigure(shape: number[][], type: number) {
        const newShape = [...shape]
        for (let i = 0; i < newShape.length; i++) {
            for (let j = 0; j < newShape[0].length; j++) {
                if (newShape[i][j] !== 0) newShape[i][j] = type
            }
        }
        return newShape;
    }

    /** Заготовка под изменения drag and drop на кастомный **/
    // function testHandle(e: React.MouseEvent) {
    //     const el = document.elementFromPoint(e.clientX, e.clientY);
    //     console.log("CAPTURE", el)
    // }

    function rotateLeft(matrix: number[][]) {
        return matrix[0].map((el: number, index: number) => matrix.map((row: number[]) => row[row.length - 1 - index]));
    }

    function inverseHorizontal(matrix: number[][]) {
        const newMatrix = [...matrix];
        return newMatrix.reverse();
    }

    function inverseVertical(matrix: number[][]) {

        const newMatrix = [...matrix];
        for (let i = 0; i < newMatrix.length; i++) {
            console.log(i)
            console.log(newMatrix[i])
            newMatrix[i].reverse()
        }
        return newMatrix;
    }

    function setFigureData(e: React.DragEvent) {
        e.dataTransfer.setData("data", JSON.stringify(dragCell))
    }

    return (
        <div className={s.container} draggable={false}>
            <section className={s.buttons}>
                <InteractiveIconButton
                    icon={rotateLeftIcon}
                    onClick={() => {
                        updateFigure(rotateLeft(figure.cells))
                    }}
                />
                <InteractiveIconButton
                    icon={invertH}
                    onClick={() => {
                        updateFigure(inverseHorizontal(figure.cells))
                    }}
                />
                <InteractiveIconButton
                    icon={invertV}
                    onClick={() => {
                        updateFigure(inverseVertical(figure.cells))
                    }}
                />
            </section>
            <div style={{width: "fit-content", height: "fit-content"}}

                 draggable={"true"}
                 onDragStart={setFigureData}
            >
                {figure.cells.map((row, y) =>
                    <div className={s.row} key={y}>
                        {row.map((el, x) =>
                            <FigureCell type={figure.cells[y][x]} x={x} y={y} dragCell={dragCell} key={x}/>)}
                    </div>)}
            </div>
        </div>
    );
};

export default FigureComponent;

