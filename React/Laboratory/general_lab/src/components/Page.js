import { myContext } from "../context/SquareContext";
import { useContext } from "react";

export function Page(){
    const {formData} = useContext(myContext);

    return(
        <div className="box boxDisplayer">
            <h1>{formData.title}</h1>
            <p>{formData.text}</p>
        </div>

    )

}