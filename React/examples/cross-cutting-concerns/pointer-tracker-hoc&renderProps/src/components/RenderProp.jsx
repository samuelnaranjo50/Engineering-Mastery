import { useRef, useEffect, useState } from "react";

// I'll pass the function to render the data hold by RenderProp

export const CursorPointerRenderProp = ({ prop, render }) => {
    const [mousePosition, setMousePosition] = useState({ Y: "0", X: "0" });
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            setMousePosition({ Y: e.clientY, X: e.clientX });
        });
    }, []);

    return (
        <>
            {render(mousePosition)}
        </>
    )

};