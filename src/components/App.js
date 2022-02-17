import React, {useState, useEffect} from 'react'
import { Route } from "react-router-dom";
import Logo from "./Logo"
import Homepage from "./Homepage";

function App() {
  const [landingPage, setLandingPage] = useState(sessionStorage.getItem("sessionStorageKey") || false)
  const [navbar, setNavbar] = useState(false)
  const [toggleSwitch, setToggleSwitch] = useState(false)

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

  function handleSwitch () {
    setToggleSwitch(toggleSwitch => !toggleSwitch)
  }

  if(toggleSwitch) {
    document.body.className = "background-under"
  } else if (!toggleSwitch){
    document.body.className = "background-over"
  }

  return (
    <div>
      <Logo navbar={navbar} landingPage={landingPage} toggleSwitch={toggleSwitch} onLandingPage={handleLandingPage} onLandingPage2={handleLandingPage2} onSwitch={handleSwitch}/>
        <Route path="/">
          <Homepage landingPage={landingPage} toggleSwitch={toggleSwitch} onLandingPage={handleLandingPage} onNavbar={handleNavBar}/>
        </Route>
    </div>
  )
}

export default App