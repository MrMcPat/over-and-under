import React from 'react'
import * as Mui from "@mui/material";

function RecipeCard({recipe}) {

  function handleClick() {
    console.log(recipe.id)
      fetch(`https://api.spoonacular.com/recipes/${recipe.id}/information?includeNutrition=true&apiKey=706bae3484f3466a81bd4afe4a6b402a`)
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