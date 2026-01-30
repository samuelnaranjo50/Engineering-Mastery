import { createContext, useState } from "react";

export const myContext  = createContext();

export function MyProvider ({children}){

const [formData, setFormData] = useState({ title:"", text: ""});

const value = {formData, setFormData};
    return (
        <myContext.Provider value={value}>
            {children}
        </myContext.Provider>
    )
}