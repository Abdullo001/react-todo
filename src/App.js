import { useState } from "react";
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
          <input type={"text"} />
        </form>

        {todo.forEach((e)=>{
          count++;
          e.id=count;
          console.log(e);
        })}

        <ul className="list-unstyled">

          {todo.map((e) => (
            
            
            <ListItem text={e.name}  isComplate={e.isComplate} id={e.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
