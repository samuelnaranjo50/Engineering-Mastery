import logo from "./logo.svg";
import "./App.css";
import { useRef, useEffect, useState } from "react";
import { PanelWithText, BasicPanel } from "./components/Hoc";

import { CursorPointerRenderProp } from "./components/RenderProp";

function App() {
  const [isHOC, setisHOC] = useState(true);

  const changeCrossCuttingExample = () => {
    setisHOC((prev) => {
      const newValue = !prev;
      alert(
        `New approach: ${newValue ? "Higher Order Component" : "Render Props"}`
      );
      return newValue;
    });
  };

  return (
    <div className="App">
      {isHOC ? <h1>Higher Order Component</h1> : <h1>Render Props</h1>}

      {isHOC ? (
        <>
          <PanelWithText />
          <BasicPanel />
        </>
      ) : (
        <>
          <CursorPointerRenderProp
            render={(mousePosition) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column", // Stack children vertically (use "row" for horizontal)
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
                    marginBottom: "100px",
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
            }}
          />

          <CursorPointerRenderProp
            render={(mousePosition) => {
              return (
                <>
                  <p>
                    ({mousePosition.Y}, {mousePosition.X} )
                  </p>
                </>
              );
            }}
          />
        </>
      )}

      <button
        style={{
          height: "50px", // Example height
          width: "300px", // Example width
          border: "2px solid #ccc", // Light gray border
          borderRadius: "12px", // Smooth corners
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Soft shadow
          margin: "auto",
          marginTop: "50px",
        }}
        onClick={changeCrossCuttingExample}
      >
        Modify Cross Cutting Concern
      </button>
    </div>
  );
}

export default App;
