import { useParams } from 'react-router-dom'

const TestRoute = () => {
  const { categoryName, todoId } = useParams()

  return (
    <div>
      <h3>Category: {categoryName}</h3>
      <h3>ID: {todoId}</h3>
    </div>
  )
}

export default TestRoute