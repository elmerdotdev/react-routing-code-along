import { Link } from "react-router-dom"
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Button from 'react-bootstrap/Button'

type Todo = {
  id: number,
  todo: string,
  completed: boolean
}

type Props = {
  todoItem: Todo,
  onDelete: (id: number) => void
}

const TodosListItem = ({ todoItem, onDelete }: Props) => {
  return (
    <ListGroupItem style={{ 'display': 'flex', 'justifyContent': 'space-between' }}>
      <span>{todoItem.id} - {todoItem.todo}</span>
      <div style={{'display': 'flex', 'gap': '1rem', 'alignItems': 'center'}}>
        <Link to={`/todos/${todoItem.id}`}>View Details</Link>
        <Button variant="danger" onClick={() => onDelete(todoItem.id)}>Delete</Button>
      </div>
    </ListGroupItem>
  )
}

export default TodosListItem