import { createContext, useState, useContext } from "react"

const myContext = createContext()

export function MyFormContext({ children }) {
  const [formData, setFormData] = useState({ title: "", text: "" })

  const value = { formData, setFormData }

  return <myContext.Provider value={value}>{children}</myContext.Provider>
}

export const usePageData = () => useContext(myContext);