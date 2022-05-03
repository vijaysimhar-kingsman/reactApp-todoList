import React, { useState } from 'react';

export const AddTodo = ({addTodo}) => {
    const [title ,setTitle]= useState("");
    const [desc , setDesc] =  useState("");

    const submit =(e)=>{
        e.preventDefault();//this is stop page from reloading when we hit submit 
        if(!title || !desc){
            alert("please fill all rows");
        }else{
            addTodo(title,desc);
            setDesc("");
            setTitle(""); 
        }
       
    }
    //console.log("print this");
    
    
  return (
    <div>
       
        <form className='container' onSubmit={submit}>
        <h3>Add todo </h3>
        <div className="mb-3">
            <label htmlFor="title" className="form-label">Todo Title</label>
            <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
            {/* on change function make changes in the respective set____ value when ever we enter some 
                values into the input field
            */ }
        </div>
        <div className="mb-3">
            <label htmlFor="desc" className="form-label">Todo Description</label>
            <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
        </div>
        
        <button type="submit" className="btn btn-sm btn-success">Add Todo</button><hr></hr>
        </form>
    </div>
  )
}
