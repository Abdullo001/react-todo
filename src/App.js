import { useState } from "react";
// import{FontAwesomeIcon}from "../node_modules/font-awesome"
import "./App.scss";
import ListItem from "./components/List/ListItem";

function App() {
  const [todo, setTodos] = useState(JSON.parse(window.localStorage.getItem("Todos"))||[]);

  const handleTodo = (evt) => {
    evt.preventDefault();

    const newTodo={

      text:evt.target[0].value,
      isComplate:false,
    }
    
    setTodos([newTodo,...todo]);
    evt.target[0].value="";
    
    
  }

  let count=1;

  todo.filter((e)=>{
    e.id=count;
    count++;
    
  })

  window.localStorage.setItem("Todos",JSON.stringify(todo));


  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">My To do list</h1>
      <div className="inner">
        <form
          onSubmit={handleTodo}
        >
          <input type={"text"} className="form-control" />
        </form>

 

        <ul className="list-unstyled w-75">

          {todo.map((e) => (
            <ListItem key={e.id} text={e.text}  isComplate={e.isComplate} id={e.id} todo={todo} setTodos={setTodos}  />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
