import React, {FC} from 'react';
import cellStyle from "./Cell.module.css"


interface CellProps {
    type: number;
    onClick?: Function
}

const Cell: FC<CellProps> = ({type, onClick}) => {

    function getCellStyle(type: number) {
        switch (type) {
            case 0:
                return cellStyle.empty
            case 1:
                return cellStyle.forest
            case 2:
                return cellStyle.village
            case 3:
                return cellStyle.river
            case 4:
                return cellStyle.field
            case 5:
                return cellStyle.mountain
        }
    }

    const cellType = getCellStyle(type)

    return (
        <div
            className={`${cellStyle.cell}  ${cellType}`}
            onClick={() => {
                onClick && onClick(type)
            }}
        />
    );
};

export default Cell;
