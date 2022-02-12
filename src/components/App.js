import React from 'react'
import { Route } from "react-router-dom";
import Logo from "./Logo"
import Homepage from "./Homepage";


function App() {
  return (
    <div>
      <Logo />
        <Route path="/">
          <Homepage />
        </Route>
    </div>
  )
}

export default App