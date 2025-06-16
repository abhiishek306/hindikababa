
import { useSelector } from "react-redux"
import AddForm from "./AddForm"
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todoSlice"; // Assuming you have a todoSlice with a deleteTodo action
export default function Todo(){
   const todos= useSelector((state) => state.todos)
    const dispatch = useDispatch();
   const clickHandler = (e) => {
        dispatch(deleteTodo(e));
        // console.log("delete", e);
   } 
    return (
        <>
        <AddForm/>
        <h3>Todos</h3>
        <ul>
            {
                todos.map((todo)=>(
                    <li key={todo.id}>{todo.task}
                    <button onClick={()=>clickHandler(todo.id)}>Delete</button>
                    </li>

                ))
            }
            
        </ul>
        </>
    )
}