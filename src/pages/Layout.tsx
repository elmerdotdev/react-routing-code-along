import { Outlet, Link } from "react-router-dom"
import { Navbar, Nav, Container } from 'react-bootstrap'

const Layout = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>React Routes</Navbar.Brand>
          <Navbar.Toggle aria-controls="routes-navbar" />
          <Navbar.Collapse id="routes-navbar">
            <Nav className="ms-auto" style={{ 'gap': '1rem' }}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/todos">To Dos</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Outlet />

        <footer>
          <p>© 2024</p>
        </footer>
      </Container>
    </>
  )
}

export default Layout