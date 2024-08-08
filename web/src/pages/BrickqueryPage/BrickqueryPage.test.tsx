import { render } from '@redwoodjs/testing/web'

import BrickqueryPage from './BrickqueryPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BrickqueryPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BrickqueryPage />)
    }).not.toThrow()
  })
})
