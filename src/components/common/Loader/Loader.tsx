import React, {FC} from 'react';
import s from "./Loader.module.css"

interface LoaderProps {
    sidePxSize: number
}

const Loader: FC<LoaderProps> = ({sidePxSize}) => {
    return (
        <div className={s.wrapper}>
            <svg width={sidePxSize} height={sidePxSize} viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
                        <stop stop-color="#14A0DC" stop-opacity="0" offset="0%"/>
                        <stop stop-color="#14A0DC" stop-opacity=".631" offset="63.146%"/>
                        <stop stop-color="#14A0DC" offset="100%"/>
                    </linearGradient>
                </defs>
                <g fill="none" fill-rule="evenodd">
                    <g transform="translate(1 1)">
                        <path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" stroke-width="2">
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                from="0 18 18"
                                to="360 18 18"
                                dur="0.9s"
                                repeatCount="indefinite"/>
                        </path>
                        <circle fill="#fff" cx="36" cy="18" r="1">
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                from="0 18 18"
                                to="360 18 18"
                                dur="0.9s"
                                repeatCount="indefinite"/>
                        </circle>
                    </g>
                </g>
            </svg>
        </div>

    );
};

export default Loader;