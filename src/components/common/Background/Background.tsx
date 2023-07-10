import React, {FC, useEffect} from 'react';
import s from "./Background.module.css"
import "./style.css"

interface BackgroundProps {
    season?: "spring" | "summer" | "fall" | "winter"
}

const Background: FC<BackgroundProps> = ({season = "spring"}) => {
    const backgroundColor = [];
    const leavesColor1 = [];
    const leavesColor2 = [];
    const leavesColor3 = [];

    useEffect(() => {
        console.log("rerender sesona")
        if (season === "spring") {
            document.documentElement.style.setProperty('--background', '#daf8ff');
            document.documentElement.style.setProperty('--leaves1', '#add63a');
            document.documentElement.style.setProperty('--leaves2', '#92c938');
            document.documentElement.style.setProperty('--leaves3', '#2a9d5c');
            document.documentElement.style.setProperty('--bush', '#3ebf6d');
        }
        if (season === "summer") {
            document.documentElement.style.setProperty('--background', '#feec98');
            document.documentElement.style.setProperty('--leaves1', '#c5d63a');
            document.documentElement.style.setProperty('--leaves2', '#acc52b');
            document.documentElement.style.setProperty('--leaves3', '#89a503');
            document.documentElement.style.setProperty('--bush', '#99b31a');
        }
        if (season === "fall") {
            document.documentElement.style.setProperty('--background', '#ffdc8a');
            document.documentElement.style.setProperty('--leaves1', '#febe42');
            document.documentElement.style.setProperty('--leaves2', '#ff9d25');
            document.documentElement.style.setProperty('--leaves3', '#ff6b2f');
            document.documentElement.style.setProperty('--bush', '#fd6d2e');
        }
        if (season === "winter") {
            document.documentElement.style.setProperty('--background', '#cbe9f4');
            document.documentElement.style.setProperty('--leaves1', '#93d5eb');
            document.documentElement.style.setProperty('--leaves2', '#66bbd8');
            document.documentElement.style.setProperty('--leaves3', '#4da2bb');
            document.documentElement.style.setProperty('--bush', '#ffffff');
        }
        return () => {
            document.documentElement.style.setProperty('--background', '#daf8ff');
        }
    }, [season])


    return (
        // <div className={s.background}>
        //     <div className={s.round_tree}>
        //         <div className={s.round_tree_part1}/>
        //         <div className={s.round_tree_part2}/>
        //         <div className={s.round_tree_part3}/>
        //     </div>
        //
        //     <div className={s.pine}>
        //         <div className={s.pine_part1}></div>
        //         <div className={s.pine_part2}></div>
        //         <div className={s.pine_part3}></div>
        //         <div className={s.pine_part4}></div>
        //     </div>
        //
        //     <div className={s.bush}>
        //         <div className={s.bush_part1}></div>
        //         <div className={s.bush_part2}></div>
        //     </div>
        //     <div className={s.big_tree}>
        //         <div className={s.big_tree_part1}></div>
        //         <div className={s.big_tree_part2}></div>
        //         <div className={s.big_tree_part3}></div>
        //         <div className={s.big_tree_part4}></div>
        //         <div className={s.big_tree_part5}></div>
        //         <div className={s.big_tree_part6}></div>
        //         <div className={s.big_tree_part7}></div>
        //     </div>
        // </div>

        <div className="background">
            <div className="round_tree">
                <div className="round_tree_part1"/>
                <div className="round_tree_part2"/>
                <div className="round_tree_part3"/>
            </div>

            <div className="pine">
                <div className="pine_part1"></div>
                <div className="pine_part2"></div>
                <div className="pine_part3"></div>
                <div className="pine_part4"></div>
            </div>

            <div className="bush">
                <div className="bush_part1"></div>
                <div className="bush_part2"></div>
            </div>
            <div className="big_tree">
                <div className="big_tree_part1"></div>
                <div className="big_tree_part2"></div>
                <div className="big_tree_part3"></div>
                <div className="big_tree_part4"></div>
                <div className="big_tree_part5"></div>
                <div className="big_tree_part6"></div>
                <div className="big_tree_part7"></div>
            </div>
        </div>
    );
};

export default Background;