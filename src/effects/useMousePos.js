import React, { useState, useEffect } from "react"


export const useMousePos = () => {
    const [position, setPosition] = useState({mouseX: 0, mouseY: 0})

    useEffect(() => {
        const setFromEvent = e => setPosition({ x: e.clientX, y: e.clientY })
        window.addEventListener("mousemove", setFromEvent)
        return () => window.removeEventListener("mousemove", setFromEvent)
    }, []) 
    return position
}
