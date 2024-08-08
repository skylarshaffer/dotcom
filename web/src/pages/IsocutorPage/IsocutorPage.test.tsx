import { render } from '@redwoodjs/testing/web'

import IsocutorPage from './IsocutorPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('IsocutorPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<IsocutorPage />)
    }).not.toThrow()
  })
})
