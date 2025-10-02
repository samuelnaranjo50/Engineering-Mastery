import { MyContext } from "../App"
import { useContext } from "react"

export function Page() {
  const { formData } = useContext(MyContext)

  return (
    <div className="box boxDisplayer">
      <h1>{formData.title}</h1>

      <p>{formData.text}</p>
    </div>
  )
}