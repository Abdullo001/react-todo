import {AiOutlineDelete} from "react-icons/ai"
import {AiOutlineEdit} from "react-icons/ai"
import "./ListItem.scss";


const ListItem=({text,isComplate,id,todo,setTodos})=>{

  const handleDeleteTodo= (todoId)=>{
    const findedTodos=todo.filter(e=>e.id!==todoId)

    setTodos([...findedTodos])
  }

  const handleEditTodo=(todoId)=>{
    todo.forEach(e => {
      e.id==todoId?e.text=prompt("Todoni o'zgartiring:"):e.text=e.text;
      
    });

    setTodos([...todo])
  }

  const handleCheckTodo=(todoId)=>{
    const findedTodo=todo.find((e)=>e.id===todoId)

    findedTodo.isComplate=!findedTodo.isComplate;
    
    setTodos([...todo])
  }
  
  return(
    <li className="d-flex align-items-center mb-3">
      <input onChange={()=>handleCheckTodo(id)} defaultChecked={isComplate} className="form-check-input" type={"checkbox"}/>
      <strong className="m-0 ms-2 me-2 fs-4 " ><span className={isComplate && "text-decoration-line-through"}>{id}  {text}</span></strong>
      <button onClick={()=>handleEditTodo(id)} className="edit-btn btn btn-outline-primary me-2 fs-4 " ><AiOutlineEdit /> Edit</button>
      <button onClick={()=>handleDeleteTodo(id)} className="delete-btn btn btn-outline-danger fs-4"><AiOutlineDelete />Delete</button>
    </li>
  )
}

export default ListItem