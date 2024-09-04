import { AddToDo } from "./AddToDo"
import { List } from "./List"
import { FilterToDo } from "./FilterToDo"

export const ToDoList = () => {

    return <div>
        <AddToDo />
        <FilterToDo/>
        <List />
    </div>
}