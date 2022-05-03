import React from 'react'

export const TodoItem = ({todos ,onDelete}) => {
  return (
    <div className='container'>
      
      <h4>
        {todos.task}
      </h4>
      <p>
        {todos.description}
      </p>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todos)} }>Delete</button>
       <hr></hr>
     
    </div>
  )
}
