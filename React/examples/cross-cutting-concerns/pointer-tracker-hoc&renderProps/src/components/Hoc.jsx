// HOC for mouse Position
import { useRef, useEffect, useState } from "react";

function CursorPointerHOC(BaseComponent) {
  const EnhancedComponent = (props) => {
    const [pointer, setPointer] = useState({ Y: "0", X: "0" });
    useEffect(() => {
      window.addEventListener("mousemove", (e) => {
        setPointer({ Y: e.clientY, X: e.clientX });
      });
    }, []);

    return <BaseComponent {...props} mousePosition={pointer} />;
  };
  return EnhancedComponent;
}

function BasicDisplay({ mousePosition }) {
  return (
        <div
      style={{
        display: "flex",
  
        justifyContent: "center", // Center vertically
        alignItems: "center", // Center horizontally
        gap: "10px", // Small space between children
        height: "200px", // Example height
        width: "300px", // Example width
        border: "2px solid #ccc", // Light gray border
        borderRadius: "12px", // Smooth corners
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Soft shadow
        backgroundColor: "#fff", // Clean background
        margin: "auto",
        marginTop: "100px",
      }}
    >
      <p>({mousePosition.Y}, {mousePosition.X} )</p>
      
    </div>
  );
}

function ElaboratedPanel({ mousePosition }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column", // Stack children vertically (use "row" for horizontal)
        justifyContent: "center", // Center vertically
        alignItems: "center", // Center horizontally
        gap: "10px", // Small space between children
        height: "300px", // Example height
        width: "300px", // Example width
        border: "2px solid #ccc", // Light gray border
        borderRadius: "12px", // Smooth corners
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Soft shadow
        backgroundColor: "#9BB4C0", // Clean background
        margin: "auto",
        marginTop: "100px",
      }}
    >
      <p>
        Mouse position X: <strong>{mousePosition.Y}</strong>
      </p>
      <p>
        Mouse position Y: <strong>{mousePosition.X}</strong>
      </p>
    </div>
  );
}

export const PanelWithText = CursorPointerHOC(ElaboratedPanel);

export const BasicPanel = CursorPointerHOC(BasicDisplay);

