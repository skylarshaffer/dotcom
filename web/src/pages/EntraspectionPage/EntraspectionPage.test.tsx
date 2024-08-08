import { render } from '@redwoodjs/testing/web'

import EntraspectionPage from './EntraspectionPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EntraspectionPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EntraspectionPage />)
    }).not.toThrow()
  })
})
