import React from 'react'
import * as Mui from "@mui/material";

function RecipeCard({recipe}) {

  function handleClick() {
      fetch(`https://api.spoonacular.com/recipes/${recipe.id}/information?includeNutrition=true&apiKey=ad6d7e06596a42319494ac3917c53649`)
      .then(resp => resp.json())
      .then(data => console.log(data))
  }

  return (
    <div>
      <img src={recipe.image} />
      <h1>{recipe.title}</h1>
      <button onClick={handleClick}>View</button>
    </div>
  )
}

export default RecipeCard