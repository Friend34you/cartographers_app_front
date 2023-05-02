import React, {RefObject, useEffect, useRef} from 'react';

export default function useScroll(parentRef: RefObject<any>, childRef: RefObject<any>, callback: Function) {
    const observer = useRef<IntersectionObserver | null>();

    useEffect(() => {
        const options = {
            root: parentRef.current,
            rootMargin: "0px",
            threshold: 0,
        };

        observer.current = new IntersectionObserver(([target]) => {
            if (target.isIntersecting) {
                console.log("intersected");
                callback();
            }
        }, options)

        observer.current.observe(childRef.current)

        return function () {
            observer?.current?.unobserve(childRef.current)
        };
    }, [callback])

};