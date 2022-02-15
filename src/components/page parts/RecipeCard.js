import React, {useState} from 'react'
import { Link } from "react-router-dom";
import * as Mui from "@mui/material";

function RecipeCard({recipe, favRecipes}) {
  const [isClicked, setIsClicked] = useState(false)

  function handleClick() {
    setIsClicked(true)
    const clickedRecipes = favRecipes.find(favRecipe => {
      return favRecipe.recipeId === recipe.id
    })
    if (clickedRecipes) {alert("Already added to favorites!")}
    if (!clickedRecipes) {
      fetch("http://localhost:8000/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          recipeId: recipe.id,
          title: recipe.title,
          image: recipe.image,
        })
      })
      .then(resp => resp.json())
      .then(data => console.log(data))
    }
  }

  return (
    <div>
              <Mui.Grid item key={recipe.id} xs={12} sm={6} md={4}>
                <Mui.Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <Mui.CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={recipe.image}
                    alt="random"
                  />
                  <Mui.CardContent sx={{ flexGrow: 1 }}>
                    <Mui.Typography gutterBottom variant="h5" component="h2">
                      {recipe.title}
                    </Mui.Typography>

                  </Mui.CardContent>
                  <Mui.CardActions>
                    <Link to={`/reciperesults/${recipe.id}`}><Mui.Button size="small">View</Mui.Button></Link>
                    <Mui.Button size="small" onClick={handleClick} disabled={isClicked}>Fav</Mui.Button>
                  </Mui.CardActions>
                </Mui.Card>
              </Mui.Grid>
    </div>
  )
}

export default RecipeCard