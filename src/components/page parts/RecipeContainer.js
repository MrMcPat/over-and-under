import React, {useState, useEffect} from "react";
import RecipeCard from "./RecipeCard";
import * as Mui from "@mui/material";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function RecipeContainer({ recipes }) {
  const[favRecipes, setFavRecipes] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/recipes")
    .then(resp => resp.json())
    .then(data => setFavRecipes(data))
  }, [])

  const recipeCard = recipes.map((recipe) => {
    return <RecipeCard key={recipe.id} recipe={recipe} favRecipes={favRecipes}/>;
  });

  return (
    <div>
    <Box sx={{ flexGrow: 1, borderRadius: 2, columngap: 2 }}>
      <Grid container justifyContent="center" rowGap={10} columnGap={10} spacing={2} >
        {recipeCard}
      </Grid>
    </Box>
    </div>
  );
}

export default RecipeContainer;
