import React, {useState} from 'react';
import Cell from "./Cell/Cell";
import fieldStyle from "./Field.module.css"
import Board from "../../../models/Board";

const Field = () => {
    // const [field, srtField] = useState(new Board())
    const field = new Board()
    field.initCells();
    field.cells[0][0].type = 1
    return (
        <div className={fieldStyle.field}>
            {field.cells.map((row: any, y: any) =>
                <React.Fragment>
                    {row.map((el:any, x:any) =>
                        <Cell
                            type={field.cells[y][x].type}
                        />
                    )}
                </React.Fragment>
            )}
        </div>
    );
};

export default Field;