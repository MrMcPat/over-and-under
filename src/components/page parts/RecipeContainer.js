import React, {useState, useEffect} from "react";
import RecipeCard from "./RecipeCard";
import * as Mui from "@mui/material";

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
      <Mui.Container sx={{ py: 8 }} maxWidth="md">
        <Mui.Grid container spacing={1}>
          {recipeCard}
        </Mui.Grid>
      </Mui.Container>
    </div>
  );
}

export default RecipeContainer;
