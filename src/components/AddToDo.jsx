import { useContext, useState } from "react"
import { ToDoContext } from "./context"


export const AddToDo = () => {
    const { onAdd } = useContext(ToDoContext)

    const [text, setText] = useState("")
    const handleSubmit = e => {
        e.preventDefault()
        if (text.trim()) {
            onAdd(text)
            setText("")
        }

    }
    return <>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button>submit</button>
        </form>
    </>
}