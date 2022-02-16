import React from 'react'
import {NavLink} from "react-router-dom"
import * as Mui from "@mui/material"
import appLogo from "../assets/over-and-under-dark.png"

function Logo({navbar, landingPage, onLandingPage, onLandingPage2}) {

  return (
    <div>
    <Mui.Box sx={{ flexGrow: 1 }}>
    <Mui.AppBar position="static" style={{paddingBottom: "10px"}}>
      <Mui.Toolbar variant="dense">
        <Mui.Typography variant="h5" sx={{ flexGrow: 1 }}>
        <NavLink id="app-logo" className="navlink" to="/" onClick={() => {onLandingPage2(false)}}><img src={appLogo} style={{height: "50px"}}/></NavLink>
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