import {useAudio} from "../../../hooks/useAudio";
import {FC, MouseEventHandler} from "react";
import volumeOn from "./../../../static/free-icon-volume-up-8191686.png"
import volumeOff from "./../../../static/free-icon-volume-mute-8191690.png"
import s from "./Player.module.css"
interface PlayerProps {
    url: string;
}

const Player: FC<PlayerProps> = ({url}) => {
    const [playing, toggle] = useAudio(url);
    return (
        <div>
            <img
                src={playing ? volumeOn : volumeOff}
                className={s.img}
                onClick={toggle as MouseEventHandler<HTMLImageElement>}
            />
        </div>
    );
};

export default Player;