import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const IsocutorPage = () => {
  return (
    <>
      <Metadata title="Isocutor" description="Isocutor page" />

      <h1>IsocutorPage</h1>
      <p>
        Find me in <code>./web/src/pages/IsocutorPage/IsocutorPage.tsx</code>
      </p>
      <p>
        My default route is named <code>isocutor</code>, link to me with `
        <Link to={routes.isocutor()}>Isocutor</Link>`
      </p>
    </>
  )
}

export default IsocutorPage
