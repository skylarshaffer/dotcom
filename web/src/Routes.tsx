// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import HomeLayout from './layouts/HomeLayout/HomeLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/entraspection" page={EntraspectionPage} name="entraspection" />
      <Route path="/brickquery" page={BrickqueryPage} name="brickquery" />
      <Route path="/isocutor" page={IsocutorPage} name="isocutor" />
      <Set wrap={HomeLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
