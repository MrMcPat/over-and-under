import React from "react";
import RecipeCard from "./RecipeCard";
import * as Mui from "@mui/material";

function RecipeContainer({ recipes, onNoDupes }) {
  const recipeCard = recipes.map((recipe) => {
    return <RecipeCard key={recipe.id} recipe={recipe} onNoDupes={onNoDupes}/>;
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
