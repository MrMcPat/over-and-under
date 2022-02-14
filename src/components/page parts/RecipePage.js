import React, {useEffect} from 'react'
import { useParams } from "react-router-dom"

function RecipePage() {
const params = useParams()
console.log(params)

//   function handleClick() {
//       fetch(`https://api.spoonacular.com/recipes/${recipe.id}/information?includeNutrition=true&apiKey=ad6d7e06596a42319494ac3917c53649`)
//       .then(resp => resp.json())
//       .then(data => setRecipeInfo(data))
//   }

useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/${params.id}/information?includeNutrition=true&apiKey=ad6d7e06596a42319494ac3917c53649`)
    .then(resp => resp.json())
    .then(data => console.log(data))
}, [params.id])

  return (
    <div></div>
  )
}

export default RecipePage