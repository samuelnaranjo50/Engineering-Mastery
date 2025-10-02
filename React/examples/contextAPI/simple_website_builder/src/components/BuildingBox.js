import { useContext } from "react"
import { MyContext } from "../App"

export function BuildingBox() {
  const { formData, setFormData } = useContext(MyContext)

  return (
    <div className="box boxBuilder">
      <h3>Build your dream web</h3>

      <form>
        <label>Title</label>

        <input
          value={formData.title}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,

              title: e.target.value,
            }))
          }
        ></input>

        <label>Text</label>

        <input
          value={formData.text}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,

              text: e.target.value,
            }))
          }
        ></input>
      </form>
    </div>
  )
}