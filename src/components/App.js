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
  }
  console.log(landingPage)

  useEffect(() => {
    sessionStorage.setItem("sessionStorageKey", landingPage)
  }, [landingPage])

  function handleNavBar () {
    setNavbar(true)
  }

  if(backgroundColor) {
    document.body.classList.add("background-under")
    document.body.classList.remove("background-over")
  } else if (!backgroundColor){
    document.body.classList.add("background-over")
    document.body.classList.remove("background-under")
  }

  return (
    <div>
      <Logo navbar={navbar} landingPage={landingPage} onLandingPage2={handleLandingPage2}/>
        <Route path="/">
          <Homepage landingPage={landingPage} onBackgroundColor={handleBackgroundColor} onLandingPage={handleLandingPage} onNavbar={handleNavBar}/>
        </Route>
    </div>
  )
}

export default App