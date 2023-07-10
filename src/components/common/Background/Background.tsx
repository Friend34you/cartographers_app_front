import React, {FC, useEffect} from 'react';
import s from "./Background.module.css"

interface BackgroundProps {
    season?: "spring" | "summer" | "fall" | "winter"
}

const Background:FC<BackgroundProps> = ({season = "spring"}) => {
    const backgroundColor = [];
    const leavesColor1 = [];
    const leavesColor2 = [];
    const leavesColor3 = [];

    useEffect(() => {
        console.log("rerender sesona")
        if (season === "fall") {
            document.documentElement.style.setProperty('--background', 'orange');
            document.documentElement.style.setProperty('--leaves1', 'orange');
            document.documentElement.style.setProperty('--leaves2', 'orange');
            document.documentElement.style.setProperty('--leaves3', 'orange');
        }

    }, [season])


    return (
        <div className={s.background}>
            <div className={s.round_tree}>
                <div className={s.round_tree_part1}/>
                <div className={s.round_tree_part2}/>
                <div className={s.round_tree_part3}/>
            </div>

            <div className={s.pine}>
                <div className={s.pine_part1}></div>
                <div className={s.pine_part2}></div>
                <div className={s.pine_part3}></div>
                <div className={s.pine_part4}></div>
            </div>

            <div className={s.bush}>
                <div className={s.bush_part1}></div>
                <div className={s.bush_part2}></div>
            </div>
            <div className={s.big_tree}>
                <div className={s.big_tree_part1}></div>
                <div className={s.big_tree_part2}></div>
                <div className={s.big_tree_part3}></div>
                <div className={s.big_tree_part4}></div>
                <div className={s.big_tree_part5}></div>
                <div className={s.big_tree_part6}></div>
                <div className={s.big_tree_part7}></div>
            </div>
        </div>
    );
};

export default Background;