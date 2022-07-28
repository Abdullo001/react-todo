
const ListItem=({text,isComplate,id})=>{

  
  return(
    <li className="d-flex align-items-center">
      {isComplate?<input defaultChecked="true" type={"checkbox"} />:<input type={"checkbox"} />}
      <h1 className="m-0 ms-2 me-2">{text}</h1>
      <button >Update</button>
      <button>Delete</button>
    </li>
  )
}

export default ListItem