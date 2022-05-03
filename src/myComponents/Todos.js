import React from 'react'
import {TodoItem} from './TodoItem';
let todoPage={
  minHight : "70vh"
}
export const Todos = (props) => {
  return (
    <div className='container' style={todoPage}>
      <h3 className='my-3'>Todos List</h3>
      {props.todos.length===0?"oh shit there are no todos to list out":
        props.todos.map((todo)=>{
          return <TodoItem todos ={todo} key={todo.sno} onDelete={props.onDelete}/>
          })
        
      }
      
      
    </div>
  )
}

