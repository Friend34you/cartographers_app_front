import {RefObject, useEffect, useRef} from 'react';

export default function useScroll(parentRef: RefObject<any>, childRef: RefObject<any>, callback: Function) {
    const observer = useRef<IntersectionObserver | null>();
    useEffect(() => {
        const childRefCurrent = childRef.current
        const options = {
            root: parentRef.current,
            rootMargin: "0px",
            threshold: 0.5,
        };

        observer.current = new IntersectionObserver(([target]) => {
            if (target.isIntersecting) {
                console.log("intersected");
                callback();
            }
        }, options)

        observer.current.observe(childRefCurrent)

        return function () {
            observer.current?.unobserve(childRefCurrent)

        };
    }, [callback])

};