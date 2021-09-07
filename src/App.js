import {useState} from 'react'
import './App.css';

function App() {

const[newTodo, setNewTodo] =useState("")
const[todos, setTodos] =useState([])

const submitHandler=(e)=>{
  e.preventDefault();

  if(newTodo.length ===0){
    return;
  }

const todoItem = {
  text: newTodo,
  complete:false
}

  setTodos([...todos,todoItem]);
  setNewTodo("")
  
}


const deleteHandler=(delindex)=>{
  const filteredTodos =todos.filter((todo,index) => {
    return index !== delindex
  })
  setTodos(filteredTodos);
}

const toggleHandler=(index)=>{
  const updatedTodo =todos.map((todo,i) =>{
    if (index === i){
      todo.complete= !todo.complete;
    }
    return todo
  })
  setTodos(updatedTodo);
}

  return (
    <div className="App">
      <form onSubmit={(event) => {
        submitHandler(event)
      }}>
        <input onChange={(event) =>{
            setNewTodo(event.target.value)
        }}type="text" value={newTodo} />
        <div>
          <button>Add</button>
        </div>
      </form>
      
       {
       todos.map((todo,index) => {
        return <div  key={index}>
          <input onChange={(event) => {

            toggleHandler(index);
          }} checked={todo.complete} type="checkbox" />

          <p style={{"display":"inline-block", "margin-right": "10px"}}>
            {todo.text}</p>

          <button  onClick={(event) => {
            deleteHandler(index)
          }}>Delete</button>
        </div>
       })
       }
      
    </div>
  );
}

export default App;
