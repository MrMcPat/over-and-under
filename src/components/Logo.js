import React from 'react'
import {NavLink} from "react-router-dom"

function Logo() {
  return (
    <div>
    <NavLink to="/">OverAndUnder</NavLink>
    <NavLink to="/reciperesults">See Recipe Results</NavLink>
    <NavLink to="/favoriterecipes">Favorite Recipes</NavLink>
    </div>

  )
}

export default Logo