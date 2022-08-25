import React, {useEffect, useRef} from 'react';
import s from './resizable.module.css';
import {useActions} from "../../hook/dispatcher";

export const ResizableReactEl = ({children}) => {
    const refBox = useRef(null)
    const refRight = useRef(null)
    const { mapResizeAC } = useActions()
    useEffect(() => {
        const resizeableElement = refBox.current
        const styles = window.getComputedStyle(resizeableElement)
        let width = parseInt(styles.width, 10)

        let xCord = 0

        const onMouseMoveRight = (event) => {
            const dx = event.clientX - xCord;
            xCord = event.clientX;
            width = width + dx;
            resizeableElement.style.width = `${width}px`;
        }
        const onMouseUpRight = (event) => {
            document.removeEventListener("mousemove", onMouseMoveRight)
            mapResizeAC(false)
        }
        const onMouseDownRight = (event) => {
            xCord = event.clientX;
            resizeableElement.style.left = styles.left;
            resizeableElement.style.right = null;
            document.addEventListener("mousemove", onMouseMoveRight)
            document.addEventListener("mouseup", onMouseUpRight)
            mapResizeAC(true)
        }

        const resizerRight = refRight.current;
        resizerRight.addEventListener("mousedown", onMouseDownRight)

        return () => {
            resizerRight.removeEventListener("mousedown", onMouseDownRight)
        }
    }, [])
    return (
        <div className={s.wrapper} >
            <div  className={s.resizeableBox} ref={refBox}>
                {children}
            </div>
            <div ref={refRight} className={s.resizer}/>
        </div>
    );
};

