import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const BrickqueryPage = () => {
  return (
    <>
      <Metadata title="Brickquery" description="Brickquery page" />

      <h1>BrickqueryPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/BrickqueryPage/BrickqueryPage.tsx</code>
      </p>
      <p>
        My default route is named <code>brickquery</code>, link to me with `
        <Link to={routes.brickquery()}>Brickquery</Link>`
      </p>
    </>
  )
}

export default BrickqueryPage
