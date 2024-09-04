import { useContext } from "react"
import { ToDoContext } from "./context"


export const FilterToDo = () => {
    const {currentFilter,onSet}=useContext(ToDoContext)
    const list = ["all", "completed", "active"]
    return <>{
        list.map((criteria, i) => <button key={i} className={currentFilter == criteria ? "button-active" : null}
        onClick={()=>onSet(criteria)}>
            {criteria}
        </button>)
    }
    </>

}