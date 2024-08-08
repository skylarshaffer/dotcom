import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const EntraspectionPage = () => {
  return (
    <>
      <Metadata title="Entraspection" description="Entraspection page" />

      <h1>EntraspectionPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/EntraspectionPage/EntraspectionPage.tsx</code>
      </p>
      <p>
        My default route is named <code>entraspection</code>, link to me with `
        <Link to={routes.entraspection()}>Entraspection</Link>`
      </p>
    </>
  )
}

export default EntraspectionPage
