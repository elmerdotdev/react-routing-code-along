import { useEffect, useState } from 'react'
import TodosListItem from './TodosListItem'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import TodoAdd from './TodoAdd'

type Todo = {
  id: number,
  todo: string,
  completed: boolean
}

const TodosList = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    setIsLoading(true)
    const fetchTodos = async () => {
      const response = await fetch('https://dummyjson.com/todos')
      const data = await response.json()
      setTodos(data.todos)
      setIsLoading(false)
    }

    fetchTodos()
  }, [])

  // Delete todo
  const handleDelete = (id: number) => {
    const updatedTodos = todos.filter(todo => todo.id !== id) // will create a new array without todo id 5
    setTodos(updatedTodos)
  }

  // Add todo
  const handleAdd = (newTodo: Todo) => {
    setTodos([newTodo, ...todos])
  }

  return (
    <Container>
      <TodoAdd onAdd={handleAdd} />
      {isLoading && <div style={{ 'width': '100%', 'height': '300px', 'backgroundColor': 'red', 'fontSize': '3rem' }}>Loading....</div>}
      <ListGroup>
        {todos.map(todoItem => (
          <TodosListItem key={todoItem.id} todoItem={todoItem} onDelete={handleDelete} />
        ))}
      </ListGroup>
    </Container>
  )
}

export default TodosList