import React from 'react'
import {NavLink} from "react-router-dom"
import * as Mui from "@mui/material"
import appLogoOver from "../assets/over-and-under-over.png"
import appLogoUnder from "../assets/over-and-under-under.png"


function Logo({navbar, landingPage, toggleSwitch, onLandingPage, onLandingPage2, onSwitch}) {

  return (
    <div>
    <Mui.Box sx={{ flexGrow: 1 }}>
    <Mui.AppBar  position="static" style={{paddingBottom: "10px", background: toggleSwitch ? "#9c563c" : "#A90409", transition: "all 1s"}}>
      <Mui.Toolbar variant="dense">
        <Mui.Typography variant="h5">
        <NavLink id="app-logo" className="navlink" to="/" onClick={() => {onLandingPage2(false)}}><img src={toggleSwitch ? appLogoUnder : appLogoOver} style={{height: "40px", width: "100px"}}/></NavLink>
        </Mui.Typography>
        <Mui.Typography variant="h5" sx={{ flexGrow: 1 }}>
        <Mui.Switch color="default" onClick={onSwitch}/>
        </Mui.Typography>
        <Mui.Typography variant="h5">
        <NavLink className={navbar ? "navlink" : "navlink-hidden"} to="/search">Search</NavLink>
        </Mui.Typography>
        <Mui.Typography variant="h5">
        <NavLink className={navbar ? "navlink" : "navlink-hidden"} to="/reciperesults">See Recipe Results</NavLink>
        </Mui.Typography>
        <Mui.Typography variant="h5">
        <NavLink className={landingPage ? "navlink" : "navlink-hidden"} to="/favoriterecipes" onClick={() => onLandingPage}>Favorite Recipes</NavLink>
        </Mui.Typography>
      </Mui.Toolbar>
    </Mui.AppBar>
    </Mui.Box>
    </div>

  )
}

export default Logo