import React from 'react'

const  TodoList=({todo,setTodo,handleDelete,seteditTodo})=> {
    const handleComplete = (tache)=>{
        setTodo(todo.map(todo=>{
            if(todo.id === tache.id){
                 return{ ...todo ,completed: !tache.completed }
        } return tache
    }
        ))
    }
    const handleEdit =({id})=>{
        seteditTodo(todo.find((todo)=> todo.id === id))
    }
  return (
    <div>
        {todo.map((task)=>(
            <li className='list-item' key={task.id}>
                <input type="text" value={task.title} className="list" onChange={(event)=>event.preventDefault()}/>
                <button className='button-complete task-button' onClick={()=>{handleComplete(task)}} >
                    <i className='fa fa-check-circle'></i>
                </button>
                <button className='button-edit task-button' onClick={()=> handleEdit(task)} >
                    <i className='fa fa-edit'></i>
                </button>
                <button className='button-delete task-button' onClick={()=>{handleDelete(task)}}>
                    <i className='fa fa-trash'></i>
                </button>
            </li>
        ))}
    </div>
  )
}

export default TodoList