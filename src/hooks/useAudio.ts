import React, {useState, useEffect, useRef} from "react";

export const useAudio = (url: string) => {
    const audio = useRef(new Audio(url))
    // const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
            playing ? audio.current.play() : audio.current.pause();
        },
        [playing]
    );

    useEffect(() => {
        const audioCurrent = audio.current
        setPlaying(true)
        audio.current.addEventListener('ended', () => audio.current.play());
        return () => {
            audioCurrent.removeEventListener('ended', () => {
                setPlaying(false)
            })
            audioCurrent.pause()
        };
    }, []);

    return [playing, toggle];
};