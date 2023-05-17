import React, {FC, useState} from 'react';
import taskStyle from "./TaskCard.module.css"
import Card from "../Card";

interface TaskCardProps {
    letter: string;
    taskImage?: string;
}

const TaskCard: FC<TaskCardProps> = ({taskImage, letter}) => {


    return (
        <div
            className={taskStyle.container}
        >
            <h2>{letter}</h2>
            <Card/>
        </div>
    );
};

export default TaskCard;