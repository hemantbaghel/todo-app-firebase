import {Button , FormControl , InputLabel , Input} from '@mui/material';
import React,{useEffect, useState} from 'react';
import Todo from "./Todo"
import firebase from 'firebase/compat/app';
import { collection, addDoc } from "firebase/firestore"; 
import {db }from './firebase'
import './App.css';
// import {  } from "firebase/firestore"; 


function App() {
const[todo,setTodos]=useState(['abhc','hjahdja']);
const [input,setInput]=useState('')
//when the app loads , we need to tisten to the database and fetch new todos as they get added and removed
useEffect(()=>{
console.log("hemat",db)
db.collection('todo').onSnapshot(snapshot=>{
 setTodos(snapshot.docs.map(doc=>doc.data().todo))
})

// const q = query(collection(db, "todo"))
//   const unsub = onSnapshot(q, (querySnapshot) => {
//     console.log("Data", querySnapshot.docs.map(d => doc.data()));
//    });
   console.log("unsub")
},[])



const addTodo=(event)=>{
  event.preventDefault();//will stop the refreshing

  db.collection('todo').add({
    todo:input,
    // timestamp:firebase.firestore
   
  })
  // setTodos([...todo,input])
  setInput('')//clearout the input after submitting
}
console.log(input)
  return (
    <div className="App">
      <h1>hello hemant 😍</h1>
      <form>
      {/* <input  value={input} onChange={event=>setInput(event.target.value)}/> */}
      <FormControl>
  <InputLabel > ✍️Write a Todo</InputLabel>
  <Input value={input} onChange={event=>setInput(event.target.value)} />
  
</FormControl>

      {/* <button type= "submit" onClick={addTodo}>Add Todo</button> */}
      <Button variant="contained" disabled={!input} type= "submit" onClick={addTodo}>Add Todo</Button>
      </form>
      
      <ul>
      {todo.map((item)=>{
        return(
          <Todo item={item}/>
        
      )
       
      })}
     
      </ul>
    </div>
  );
}

export default App;
