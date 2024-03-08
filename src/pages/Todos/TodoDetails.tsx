import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

type Todo = {
  id: number,
  todo: string,
  completed: boolean
}

const TodoDetails = () => {
  const [todo, setTodo] = useState<Todo>({
    id: 0,
    todo: '',
    completed: false
  })
  const { todoId } = useParams() // pulling from the address bar
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    setIsLoading(true)
    const fetchTodo = async () => {
      const response = await fetch(`https://dummyjson.com/todos/${todoId}`)
      const data = await response.json()
      setTodo(data)
      setIsLoading(false)
    }

    fetchTodo()
  }, [todoId])

  const handleBack = () => {
    navigate('/todos')
  }

  return (
    <div>
      {isLoading && <div style={{ 'width': '100%', 'height': '300px', 'backgroundColor': 'red', 'fontSize': '3rem' }}>Loading....</div>}
      <h2>{todo.todo}</h2>
      <h3>ID: {todoId}</h3>
      <Button onClick={handleBack}>Go back to List</Button>
    </div>
  )
}

export default TodoDetails