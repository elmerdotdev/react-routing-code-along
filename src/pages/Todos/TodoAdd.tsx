import { ChangeEvent, useState, FormEvent } from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

type Todo = {
  id: number,
  todo: string,
  completed: boolean
}

type Props = {
  onAdd: (newTodo: Todo) => void
}

const TodoAdd = ({ onAdd }: Props) => {
  const [formData, setFormData] = useState<Todo>({
    id: Math.floor(Math.random() * 1000) + 1,
    todo: '',
    completed: false
  })

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      id: Math.floor(Math.random() * 1000) + 1,
      todo: event.target.value
    })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onAdd(formData)
  }

  return (
    <Container>
      <h3>Add To Do</h3>
      <Form onSubmit={handleSubmit}>
        <FormControl value={formData.todo} type="text" name="todo" placeholder="Enter todo details..." onChange={handleInputChange} />
        <Button type="submit">Add New Todo</Button>
      </Form>
    </Container>
  )
}

export default TodoAdd