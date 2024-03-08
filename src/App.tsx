import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import AboutTeam from './pages/About/AboutTeam'
import AboutLayout from './pages/About/AboutLayout'
import NotFound from './pages/NotFound/NotFound'
import TodosLayout from './pages/Todos/TodosLayout'
import TodosList from './pages/Todos/TodosList'
import TodoDetails from './pages/Todos/TodoDetails'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutLayout />}>
            <Route index element={<About />} />
            <Route path="team" element={<AboutTeam />} />
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="todos" element={<TodosLayout />}>
            <Route index element={<TodosList />} />
            <Route path=":todoId" element={<TodoDetails />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App