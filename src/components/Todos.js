import {getTodos} from '../services/todos-api'
import {useState, useEffect} from 'react'
//import Create from './CreateTodo'
import Todo from './Todo'
import Create from './CreateTodo'

export default function Todos() {
    const [todos, setTodos] = useState([])
    useEffect(()=>{
        getTodos() // calling the function to get the data
        .then(res => setTodos(res.data))
    }, [])


    console.log(todos)
    return(
        <div>
            <ul>
          {todos.map((todo) => {
            return (
                <li><a href={`/${todo._id}`}>
                    <h3 className={`${todo.complete ? "completed" : ""}`}>
                    {todo.description}
                  </h3></a></li>
            )
          })}
          </ul>
          <Create />
        </div>
    )
}