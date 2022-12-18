import React,{useState} from 'react';
import Header from './components/Header';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [input,setInput]= useState("");
  const [todo,setTodo]= useState([]);
  const [editTodo,seteditTodo] = useState(null);
 // console.log(todo)
 const handleDelete=(tache)=>{
  setTodo(todo.filter((task)=>task.id !== tache.id))
 }
  return (
    <div className="container">
      <div className="app-wrapper">
        <div className="">
        <Header/>
        </div>
        <div className="">
        <Form
        input={input}
        setInput={setInput}
        todo={todo}
        setTodo={setTodo}
        seteditTodo={seteditTodo} editTodo={editTodo}
        />
       
        </div>
        <div className="">
          <TodoList todo={todo} setTodo={setTodo} handleDelete={handleDelete} seteditTodo={seteditTodo}/>
        </div>
      </div>

    </div>
  );
}

export default App;
