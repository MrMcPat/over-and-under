import React from 'react'
import RecipeCard from './RecipeCard'

function RecipeContainer({recipes}) {
  
  const recipeCard = recipes.map(recipe => {
    return <RecipeCard key={recipe.id} recipe={recipe}/>
  })  

  return (
    <div>
      {recipeCard}
    </div>
  )
}

export default RecipeContainer