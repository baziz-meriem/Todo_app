import React from 'react'
import {v4 as uuidv4} from "uuid"

function Form({input,setInput,todo,setTodo,seteditTodo,editTodo}) {

    const updateTodo =(title,{id,completed})=>{
        const newTodo = todo.map((todo)=>
           todo.id === id ? {title,id,completed}:todo
        )
        setTodo(newTodo)
        seteditTodo("");
    }
    const onInputChange=(event)=>{
        setInput(event.target.value)
    }
    const onFormSubmit=(event)=>{
        event.preventDefault();
        if(!editTodo)
        {
        setTodo([...todo,{id:uuidv4(), title:input, completed:false}]);
    } else {
            updateTodo(input,editTodo);
            
        }
        setInput("")
    }
  return (
    <form onSubmit={onFormSubmit}>
        <input 
        type="text" 
        placeholder='Enter a todo...' 
        className='task-input'
        value={input}
        required
        onChange={onInputChange}
         />
        <button className='button-add' type="submit">
            Add
        </button>
    </form>
  )
}

export default Form