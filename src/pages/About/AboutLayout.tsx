import { Outlet } from 'react-router-dom'

const AboutLayout = () => {
  return (
    <div>
      <h3>This is the About Layout</h3>
      <Outlet />
    </div>
  )
}

export default AboutLayout