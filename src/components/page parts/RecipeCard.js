import React from 'react'
import { Link, Route } from "react-router-dom";
import * as Mui from "@mui/material";
import RecipePage from './RecipePage';

function RecipeCard({recipe}) {

  return (
    <div>
      <img src={recipe.image} />
      <h1>{recipe.title}</h1>
      <Link to={`/reciperesults/${recipe.id}`}><button onClick={null}>View</button></Link>
    </div>
  )
}

export default RecipeCard