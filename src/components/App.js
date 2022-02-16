import React, {useState, useEffect} from 'react'
import { Route } from "react-router-dom";
import Logo from "./Logo"
import Homepage from "./Homepage";

function App() {
  const [backgroundColor, setBackgroundColor] = useState(false)
  const [landingPage, setLandingPage] = useState(sessionStorage.getItem("sessionStorageKey") || false)
  const [navbar, setNavbar] = useState(false)

  function handleBackgroundColor () {
    setBackgroundColor(backgroundColor => !backgroundColor)
  }

  function handleLandingPage () {
    setLandingPage(true)
  }

  function handleLandingPage2 (state) {
    setLandingPage(false)
    setNavbar(false)
  }

  useEffect(() => {
    sessionStorage.setItem("sessionStorageKey", landingPage)
  }, [landingPage])

  function handleNavBar () {
    setNavbar(true)
  }

  if(backgroundColor) {
    document.body.className = "background-under"
  } else if (!backgroundColor){
    document.body.className = "background-over"
  }

  return (
    <div>
      <Logo navbar={navbar} landingPage={landingPage} onLandingPage={handleLandingPage} onLandingPage2={handleLandingPage2}/>
        <Route path="/">
          <Homepage landingPage={landingPage} onBackgroundColor={handleBackgroundColor} onLandingPage={handleLandingPage} onNavbar={handleNavBar}/>
        </Route>
    </div>
  )
}

export default App