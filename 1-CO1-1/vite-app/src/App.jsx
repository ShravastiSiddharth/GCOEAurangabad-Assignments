import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [title, setTitle ] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('')
  const [todo, setTodo] = useState([])

  var a = "HELLO"
  let b = 8
  const c = "Welcome"

  const obj = {
    name: "shravasti",
    age: 25,
    certifications: {
      one: "Java",
      second: "MERN"
    },
    arr: [2,3,4,5]
  }

  const handleSubmit = async (e)=>{
    
   e.preventDefault()
   const currentTodo = {title,description,status}
  //  const newTodoList = 
  //  setTodo((prev)=>{console.log("The new array: ", prev);
  //   return prev.push(currentTodo)})
  console.log()
  setTodo([...todo,currentTodo])
  // console.log("NEw todo list",newTodoList)
  //  setTodo(newTodoList)

   
    // console.log("Title",title,"description: ", description, "status: ", status)
    setDescription('')
    setStatus('')
    setTitle('')

  }
          
   const handleApi= async()=> {
  await  fetch('https://jsonplaceholder.typicode.com/todos').then((response)=>response.json()).then((response)=> console.log(response))
   }

   useEffect(()=>{
    handleApi()
   },[])


  return (
    <>
    <div className='form-container'>
      

    <form action="" onSubmit={handleSubmit}>
      <div>
      <label htmlFor="">Title</label>
      <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)}/>
      </div>
      <div>
      <label htmlFor="">Description</label>
      <textarea name="" id="" value={description} onChange={(e)=> setDescription(e.target.value)}></textarea>
      </div>
      <label htmlFor="">Status</label>
      <input type="text" value={status} onChange={(e)=> setStatus(e.target.value)}/>

      <button type='submit'>Submit</button>
    </form>
    </div>

    <div>
      {/* Todo {todo.length!=0 ?

      todo.map((singleTodo)=> <>
       {singleTodo.title
       
       }
      </>)
      : 
       "NO Todos"
      } */}
{/* This is todo {todo[0]} */}
      { todo && todo.length  ? 
      todo.map((singleTodo)=> (<>
     <h1>Title: </h1>
      {singleTodo.title}
      <h1>Description</h1>
      {singleTodo.description}
      <h1>Status</h1>
      {singleTodo.status}
      </>))
      : 
      "NO todo"
      
      }
    </div>

    </>
  )
}

export default App
