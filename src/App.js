import './App.css';
import Header from './myComponents/Header';
import {Todos} from './myComponents/Todos';
import { AddTodo } from './myComponents/AddTodo';
import {Footer} from './myComponents/Footer';
import { About } from './myComponents/About';
import React, { useState ,useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";


function App() {
  let initTodo;
  if(!localStorage.getItem("todos")){
    initTodo =[];
  }else{
    initTodo =JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) =>{
    console.log("ok im gonna deleted",todo);
    setTodos(todos.filter((e)=>{
        return e!==todo;
    }));
    //1
    //localStorage.getItem("todos");
    //localStorage.setItem("todos",JSON.stringify("todos"));

  }
  const addTodo = (title, desc)=>{
    console.log("this is the title and desc of the todo",title, desc);
    let sno;
    if(todos.length ===0){
      sno=1;
    }else{
      sno =  todos[todos.length-1].sno+1;
    }
      const myTodos = {
        sno :sno,
        task :title,
        description:desc,
        
      }
    
    console.log(myTodos);
    setTodos([...todos ,myTodos]);
    //if(localStorage.getItem("todos")){
    //  localStorage.setItem("todos",JSON.stringify("todos"));
    //}
    //localStorage.setItem("todos",JSON.stringify("todos"));


  }
  
  const [todos, setTodos] = useState(initTodo);

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])
  return (
   <>
   <Router>
    <Header  searchBar={true}/>
        <Routes>
          <Route exact path="/" element={
              <>
              <AddTodo addTodo={addTodo}/>
              <Todos todos={todos} onDelete={onDelete}/>
              </>
            
          } />
          <Route  exact path="/about" element={
            <About />}/>
     </Routes>
    <Footer/>
    </Router> 
   </>
  );
}

export default App;
/*let sno = todos[todos.length-1].sno+1;
    let myTodo ={
      sno :sno,
      title : title,
      desc :desc,
    }
    setTodos([...todos ,myTodo]);
  console.log(myTodo);*/