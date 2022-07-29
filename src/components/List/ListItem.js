import {AiOutlineDelete} from "react-icons/ai"
import {AiOutlineEdit} from "react-icons/ai"
import "./ListItem.scss";


const ListItem=({text,isComplate,id})=>{

  
  return(
    <li className="d-flex align-items-center mb-3">
      {isComplate?<input defaultChecked="true" className="form-check-input" type={"checkbox"} />:<input className="form-check-input" type={"checkbox"} />}
      <h1 className="m-0 ms-2 me-2 fs-4">{text}</h1>
      <button className="edit-btn btn btn-outline-primary me-2 fs-4 " ><AiOutlineEdit /> Edit</button>
      <button className="delete-btn btn btn-outline-danger fs-4"><AiOutlineDelete />Delete</button>
    </li>
  )
}

export default ListItem