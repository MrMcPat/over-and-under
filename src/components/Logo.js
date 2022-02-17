import React from 'react'
import {NavLink} from "react-router-dom"
import * as Mui from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import appLogoOverBar from "../assets/over-and-under-overbar.png"
import appLogoUnderBar from "../assets/over-and-under-underbar.png"


function Logo({navbar, landingPage, toggleSwitch, onLandingPage, onLandingPage2, onSwitch}) {

  return (
    <div>
    <Mui.Box sx={{ flexGrow: 1 }}>
    <Mui.AppBar  position="static" style={{paddingBottom: "10px", background: toggleSwitch ? "#9c563c" : "#A90409", transition: "all 1s"}}>
      <Mui.Toolbar variant="dense">
        <Mui.Typography>
        <NavLink id="app-logo" className="navlink" to="/" onClick={() => {onLandingPage2(false)}}><img src={toggleSwitch ? appLogoUnderBar : appLogoOverBar} style={{height: "40px", width: "100px"}}/></NavLink>
        </Mui.Typography>
        <Mui.Typography sx={{ flexGrow: 1 }}>
        <Mui.Switch color="default" onClick={onSwitch}/>
        </Mui.Typography>
        <Mui.ButtonGroup>
        <Mui.Typography >
        <NavLink className={navbar ? "navlink" : "navlink-hidden"} to="/search"><Mui.Tooltip title="Search"><SearchIcon style={{color: toggleSwitch ? "#D3ECA7" : "#FFFDA2", transition: "1s"}}/></Mui.Tooltip></NavLink>
        </Mui.Typography>
        <Mui.Typography >
        <NavLink className={navbar ? "navlink" : "navlink-hidden"} to="/reciperesults"><Mui.Tooltip title="See recipe results"><MenuBookIcon style={{color: toggleSwitch ? "#D3ECA7" : "#FFFDA2", transition: "1s"}}/></Mui.Tooltip></NavLink>
        </Mui.Typography>
        <Mui.Typography >
        <NavLink className={landingPage ? "navlink" : "navlink-hidden"} to="/favoriterecipes" onClick={() => onLandingPage}><Mui.Tooltip title="See favorite list"><FavoriteBorderIcon style={{color: toggleSwitch ? "#D3ECA7" : "#FFFDA2", transition: "1s"}}/></Mui.Tooltip></NavLink>
        </Mui.Typography>
        </Mui.ButtonGroup>
      </Mui.Toolbar>
    </Mui.AppBar>
    </Mui.Box>
    </div>

  )
}

export default Logo