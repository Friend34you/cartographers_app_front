import React, {useState} from 'react';
import Cell from "./Cell/Cell";
import fieldStyle from "./Field.module.css"
import Board from "../../../models/Board";

const Field = () => {
    const [field, setField] = useState(new Board())
    field.initCells();
    field.cells[0][0] = 1

    function updateField() {
        const newField = field.getCopyBoard();
        setField(newField)
    }
    return (
        <div className={fieldStyle.field}>
            {field.cells.map((row: any, y: any) =>
                <React.Fragment>
                    {row.map((el:any, x:any) =>
                        <Cell
                            type={field.cells[y][x]}
                            field={field}
                            updateField={updateField}
                            x={x}
                            y={y}
                        />
                    )}
                </React.Fragment>
            )}
        </div>
    );
};

export default Field;