import React, {FC} from 'react';
import s from "./Cell.module.css"
import {CellTypes} from "../../../../utils/cellTypes";


interface CellProps {
    type: number;
    onClick?: Function
}

const Cell: FC<CellProps> = ({type, onClick}) => {

    function getCellStyle(type: number) {
        switch (type) {
            case CellTypes.EMPTY:
                return s.empty
            case CellTypes.FOREST:
                return s.forest
            case CellTypes.VILLAGE:
                return s.village
            case CellTypes.RIVER:
                return s.river
            case CellTypes.FIELD:
                return s.field
            case CellTypes.MONSTER:
                return s.monster
            case CellTypes.MOUNTAIN:
                return s.mountain
            case CellTypes.RUINS:
                return s.ruins
        }
    }

    const cellType = getCellStyle(type)

    return (
        <div
            draggable={false}
            className={`${s.cell}  ${cellType}`}
            onClick={() => {
                onClick && onClick(type)
            }}
        />
    );
};

export default Cell;
