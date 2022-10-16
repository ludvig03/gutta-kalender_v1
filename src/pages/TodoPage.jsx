import React, { useContext } from 'react'
import '../App.css'
import readTodosRequests from '../api/readTodosRequests'
import { useQuery } from 'react-query'
import BoxLoader from 'react-spinners/ClimbingBoxLoader'
import { TodoItem } from '../components/TodoItem'
import { CreateTodoForm } from '../components/CreateTodoForm'
import { TokenContext } from '../App'

export const TodoPage = () => {

    const [token] = useContext(TokenContext)

    const {isLoading, data: todos} = useQuery('todos', () => readTodosRequests(token))

  return (
    <div className="App">
        <h1>GUTTA KALENDER</h1>
        {isLoading ? (
        <BoxLoader size={10} color={"#ffffff"}/>
        ) : (
        todos.map((todo) => (
            <TodoItem todo={todo} key={todo._id}/>
        ))
        )}
        <CreateTodoForm />
    </div>
  )
}
