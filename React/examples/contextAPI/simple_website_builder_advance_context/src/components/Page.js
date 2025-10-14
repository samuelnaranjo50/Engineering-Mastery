
import { usePageData } from "../context/formContext"

export function Page() {
  const { formData } = usePageData();

  return (
    <div className="box boxDisplayer">
      <h1>{formData.title}</h1>

      <p>{formData.text}</p>
    </div>
  )
}