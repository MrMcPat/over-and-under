import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"

function RecipePage() {
const params = useParams()
const [recipeInfo, setRecipeInfo] = useState([])

useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/${params.id}/information?includeNutrition=true&apiKey=10f404130be14caf8274ea22151509b7`)
    .then(resp => resp.json())
    .then(data => {setRecipeInfo(data)})
}, [])

    console.log(recipeInfo)

    if(recipeInfo.length == 0) {return null}
    const instructionsArray = recipeInfo.instructions.replace(/<\/?[^>]+(>|$)/g, "").replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|")
  
    return (
    <div>
        <img src={recipeInfo.image}></img>
        <h1>{recipeInfo.title}</h1>
        <h2>Nutrition Facts</h2>
        <iframe src={`https://api.spoonacular.com/recipes/${params.id}/nutritionWidget?defaultCss=true&apiKey=10f404130be14caf8274ea22151509b7`} height="710" width="1000"></iframe>
        <h2>Ingredients</h2>
        <iframe src={`https://api.spoonacular.com/recipes/${params.id}/ingredientWidget?defaultCss=true&measure=metric&apiKey=10f404130be14caf8274ea22151509b7`} height="400" width="1000"></iframe>
        <h2>Instructions</h2>
        <ol>
            {instructionsArray.map(step => {
                return <li>{step}</li>
            })}
        </ol>
        <h2>Equipment</h2>
        <iframe src={`https://api.spoonacular.com/recipes/${params.id}/equipmentWidget?defaultCss=true&apiKey=10f404130be14caf8274ea22151509b7`} height="200" width="1000"></iframe>
    </div>
  )
}

export default RecipePage