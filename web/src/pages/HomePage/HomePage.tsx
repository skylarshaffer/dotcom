import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />

      <h1>Skylar Shaffer</h1>
      <p>Full-Stack Web Developer</p>
      <p>
        <Link to={routes.home()}>Home</Link>
      </p>
    </>
  )
}

export default HomePage
