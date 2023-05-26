import React, {FC} from 'react';
import s from "./Cell.module.css"


interface CellProps {
    type: number;
    onClick?: Function
}

const Cell: FC<CellProps> = ({type, onClick}) => {

    function getCellStyle(type: number) {
        switch (type) {
            case 0:
                return s.empty
            case 1:
                return s.forest
            case 2:
                return s.village
            case 3:
                return s.river
            case 4:
                return s.field
            case 5:
                return s.mountain
        }
    }

    const cellType = getCellStyle(type)

    return (
        <div
            className={`${s.cell}  ${cellType}`}
            onClick={() => {
                onClick && onClick(type)
            }}
        />
    );
};

export default Cell;
