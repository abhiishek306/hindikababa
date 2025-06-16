import { useState } from "react"
import { useDispatch } from "react-redux";
import {addTodo} from "../features/todoSlice"; // Assuming you have a todoSlice with an addTodo action
export default function AddForm(){
    const [task, setTask] = useState("");
    const dispatch = useDispatch();
    const handleSubmit= (e) => {
        e.preventDefault();
        dispatch(addTodo(task));
        setTask(""); // Clear the input field after adding the task
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e)=>setTask(e.target.value)}></input>
            <button>Add Task</button>
        </form>
        </>
    )
}