import React from 'react'
import {NavLink} from "react-router-dom"
import * as Mui from "@mui/material";
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';

function Logo() {
  return (
    <div>
    <Mui.Box sx={{ flexGrow: 1 }}>
    <Mui.AppBar position="static">
      <Mui.Toolbar variant="dense">
        <Mui.Typography variant="h5" sx={{ flexGrow: 1 }}>
        <NavLink id="app-logo" className="navlink" to="/">OverAndUnder</NavLink>
        </Mui.Typography>
        <Mui.Typography variant="h5">
        <NavLink className="navlink" to="/reciperesults">See Recipe Results</NavLink>
        </Mui.Typography>
        <Mui.Typography variant="h5">
        <NavLink className="navlink" to="/favoriterecipes">Favorite Recipes</NavLink>
        </Mui.Typography>
      </Mui.Toolbar>
    </Mui.AppBar>
    </Mui.Box>
    

    </div>

  )
}

export default Logo