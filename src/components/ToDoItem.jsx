export const ToDoItem = ({ todo,onUpdate,onDelete}) => {
    return <div className={"todo " + (todo.completed ? "done" : "")}>
        <p>{todo.text}</p>
        <button onClick={()=>onDelete(todo.id)}>delete</button>
        <button onClick={()=>onUpdate(todo.id)}>{todo.completed ? "CANCEL" : "COMPLETE"}</button>
    </div>
}