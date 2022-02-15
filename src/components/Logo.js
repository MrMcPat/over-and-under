import React from 'react'
import {NavLink} from "react-router-dom"
import * as Mui from "@mui/material";

function Logo() {
  return (
    <div>
    <Mui.Box sx={{ flexGrow: 1 }}>
    <Mui.AppBar position="static">
      <Mui.Toolbar variant="dense">
        <Mui.Typography variant="h5" color="inherit">
        <NavLink to="/">OverAndUnder</NavLink>
        </Mui.Typography>
        <Mui.Typography variant="h5" color="inherit" sx={{ flexGrow: 1 }}>
        <NavLink to="/reciperesults">See Recipe Results</NavLink>
        </Mui.Typography>
        <Mui.Typography variant="h5" color="inherit">
        <NavLink to="/favoriterecipes">Favorite Recipes</NavLink>
        </Mui.Typography>
      </Mui.Toolbar>
    </Mui.AppBar>
    </Mui.Box>
    

    </div>

  )
}

export default Logo