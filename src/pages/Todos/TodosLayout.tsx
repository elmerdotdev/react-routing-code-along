import { Outlet } from 'react-router-dom'

const TodosLayout = () => {
  return (
    <div>
      <h1>To Dos</h1>
      
      <Outlet />
    </div>
  )
}

export default TodosLayout