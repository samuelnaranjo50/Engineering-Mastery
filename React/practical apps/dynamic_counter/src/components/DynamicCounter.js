import { useState } from "react";

export default function DynamicCounter(){

    let [counter, setCounter] = useState(0);

    function counterClickHandlerUp() {
        setCounter(counter => counter + 1);
    }

    function counterClickHandlerDown() {
        setCounter(counter => counter - 1);
    }

    //Style object

    let buttonStyle = {
        width: "30%",
        height: "50px",
        backgroundColor: "black",
        color: "white",
        borderRadius: "50px",

    }
    return (
        <>
            <button onClick={counterClickHandlerDown} style={buttonStyle}>Down</button>
            <h2>{counter}</h2>
            <button onClick={counterClickHandlerUp} style={buttonStyle}>Up</button>
        </>

    )
    ;
}