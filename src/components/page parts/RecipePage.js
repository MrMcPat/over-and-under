import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import * as Mui from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';

function RecipePage({favRecipes, toggleSwitch}) {
const params = useParams()
const [recipeInfo, setRecipeInfo] = useState([])
const [isClicked, setIsClicked] = useState(false)

useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/${params.id}/information?includeNutrition=true&apiKey=32b53701d7d54122a094792d559f0252`)
    .then(resp => resp.json())
    .then(data => {setRecipeInfo(data)})
}, [])

console.log(recipeInfo.title)
console.log(favRecipes)

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
                calorie: recipeInfo.nutrition.nutrients[0].name,
                protein: recipeInfo.nutrition.nutrients[1].name,
                carb: recipeInfo.nutrition.nutrients[2].name,
                calorieAmount: recipeInfo.nutrition.nutrients[0].amount,
                proteinAmount: recipeInfo.nutrition.nutrients[1].amount,
                carbAmount: recipeInfo.nutrition.nutrients[2].amount,
              })
            })
            .then(resp => resp.json())
            .then(data => console.log(data))
    }
}
    
    return (
    <div className="recipe-page" style={{color: toggleSwitch ? "#632626" : "#A90409", transition: "1s"}}>
        <img src={recipeInfo.image}></img>
        <h1>{recipeInfo.title}</h1>
        <Mui.Tooltip title="Add to favorites"><Mui.Button size="small" onClick={handleClick} disabled={isClicked}><FavoriteIcon style={{color: "#FF6363"}}/></Mui.Button></Mui.Tooltip>
        <hr/>
        <h2>Nutrition Facts</h2>
        <iframe src={`https://api.spoonacular.com/recipes/${params.id}/nutritionWidget?defaultCss=true&apiKey=32b53701d7d54122a094792d559f0252`} height="710" width="1000"></iframe>
        <hr/>
        <h2>Ingredients</h2>
        <iframe src={`https://api.spoonacular.com/recipes/${params.id}/ingredientWidget?defaultCss=true&measure=metric&apiKey=32b53701d7d54122a094792d559f0252`} height="400" width="1000"></iframe>
        <hr/>
        <h2>Instructions</h2>
        <ol>
            {instructionsArray.map(step => {
                return <li>{step}</li>
            })}
        </ol>
        <hr/>
        <h2>Equipment</h2>
        <iframe src={`https://api.spoonacular.com/recipes/${params.id}/equipmentWidget?defaultCss=true&apiKey=32b53701d7d54122a094792d559f0252`} height="200" width="1000"></iframe>
    </div>
  )
}

export default RecipePage