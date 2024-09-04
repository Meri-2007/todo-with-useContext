import { useContext } from "react"

import { ToDoItem } from "./ToDoItem"
import { ToDoContext } from "./context"
export const List = () => {
    const { todos, onUpdate, currentFilter, onDelete } = useContext(ToDoContext)
    let filtered = todos
    if (currentFilter == "active") {
        filtered = todos.filter(a => !a.completed)
    } else if (currentFilter == "completed") {
        filtered = todos.filter(a => a.completed)
    }
    return <>
        <strong>{currentFilter}</strong>
        {
            filtered.map(todo => <ToDoItem
                onDelete={onDelete}
                key={todo.id}
                onUpdate={onUpdate}
                todo={todo} />)
        }
    </>
}