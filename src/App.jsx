
import './App.css'
import { ToDoContext } from './components/context'
import { ToDoList } from './components/ToDoList'
import { useState } from "react"
export default function App(){

  const [todos, setTodos] = useState([
        { id: 101, text: "Go for a walk", completed: false },
        { id: 102, text: "Have a coffee", completed: true },
        { id: 103, text: "Do workout", completed: false }

    ])
    const [currentFilter, setCurentFilter] = useState("all")
    const handleAdd = text => {
        setTodos([...todos, { text, completed: false, id: Date.now() }])
    }
    const handleUptade = id => {
        setTodos(todos.map(todo =>
            todo.id != id ? todo : { ...todo, completed: !todo.completed }))
    }
    const handleDelete=id=>{
      setTodos(todos.filter(todo=>todo.id!==id))
    }
    return<>
      <ToDoContext.Provider value={{todos,onAdd:handleAdd,onUpdate:handleUptade,currentFilter,onSet:setCurentFilter,onDelete:handleDelete}}>
          <ToDoList/>
      </ToDoContext.Provider>

    </>
}