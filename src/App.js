import { useState } from "react";
// import{FontAwesomeIcon}from "../node_modules/font-awesome"
import "./App.scss";
import ListItem from "./components/List/ListItem";

function App() {
  const [todo, setTodos] = useState([
   {
    name: "Uxlash",
    isComplate: true,
   }
  ]);

  let count=0

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">My To do list</h1>
      <div className="inner">
        <form
          onSubmit={(evt) => {
            evt.preventDefault();
            setTodos([
              ...todo,
              {
                
                name: evt.target[0].value,
                isComplate: false,
              },
            ]);
          }}
        >
          <input type={"text"} className="form-control" />
        </form>

        {todo.forEach((e)=>{
          count++;
          e.id=count;
          console.log(e);
        })}

        <ul className="list-unstyled w-75">

          {todo.map((e) => (
            
            
            <ListItem text={e.name}  isComplate={e.isComplate} id={e.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
