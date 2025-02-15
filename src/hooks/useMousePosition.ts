import { useState, useEffect } from "react";

export default function useMousePosition() {
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition)
        return () => window.removeEventListener("mousemove", updateMousePosition)
    }, [])

    function updateMousePosition(e :MouseEvent) {
        setMousePosition({x: e.clientX, y: e.clientY})
    }

    return mousePosition 
}