import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import * as Mui from "@mui/material";

function RecipePage({favRecipes}) {
const params = useParams()
const [recipeInfo, setRecipeInfo] = useState([])
const [isClicked, setIsClicked] = useState(false)

useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/${params.id}/information?includeNutrition=true&apiKey=ad6d7e06596a42319494ac3917c53649`)
    .then(resp => resp.json())
    .then(data => {setRecipeInfo(data)})
}, [])

    console.log(recipeInfo)

    if(recipeInfo.length == 0) {return null}
    const instructionsArray = recipeInfo.instructions.replace(/<\/?[^>]+(>|$)/g, "").replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|")
  
    function handleClick() {
        setIsClicked(true)
        const clickedRecipes = favRecipes.find(favRecipe => {
            return favRecipe.title === recipeInfo.title
          })
          if (clickedRecipes) {alert("Already added to favorites!")}
          if (!clickedRecipes) {
            fetch("http://localhost:8000/recipes", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                title: recipeInfo.title,
                image: recipeInfo.image,
              })
            })
            .then(resp => resp.json())
            .then(data => console.log(data))
    }
}
    
    return (
    <div>
        <Mui.Button size="small" onClick={handleClick} disabled={isClicked}>Fav</Mui.Button>
        <img src={recipeInfo.image}></img>
        <h1>{recipeInfo.title}</h1>
        <h2>Nutrition Facts</h2>
        <iframe src={`https://api.spoonacular.com/recipes/${params.id}/nutritionWidget?defaultCss=true&apiKey=ad6d7e06596a42319494ac3917c53649`} height="710" width="1000"></iframe>
        <h2>Ingredients</h2>
        <iframe src={`https://api.spoonacular.com/recipes/${params.id}/ingredientWidget?defaultCss=true&measure=metric&apiKey=ad6d7e06596a42319494ac3917c53649`} height="400" width="1000"></iframe>
        <h2>Instructions</h2>
        <ol>
            {instructionsArray.map(step => {
                return <li>{step}</li>
            })}
        </ol>
        <h2>Equipment</h2>
        <iframe src={`https://api.spoonacular.com/recipes/${params.id}/equipmentWidget?defaultCss=true&apiKey=ad6d7e06596a42319494ac3917c53649`} height="200" width="1000"></iframe>
    </div>
  )
}

export default RecipePage