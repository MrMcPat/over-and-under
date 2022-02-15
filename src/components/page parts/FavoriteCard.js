import React from "react";
import { Link } from "react-router-dom";
import * as Mui from "@mui/material";

function FavoriteCard({ recipe, onDelete }) {
  function handleClick() {
    console.log(recipe);
    fetch(`http://localhost:8000/recipes/${recipe.id}`, {
      method: "DELETE",
    })
      .then(resp => resp.json())
      .then(() => onDelete(recipe.id));
  }

  let extractedId = recipe.image.split('/recipeImages/')[1].split('-')[0]

  return (
    <div>
      <img src={recipe.image}></img>
      <p>{recipe.title}</p>
      <Link to={`/reciperesults/${extractedId}`}>
        <Mui.Button size="small">View</Mui.Button>
      </Link>
      <Mui.Button size="small" onClick={handleClick}>
        Delete
      </Mui.Button>
    </div>
  );
}

export default FavoriteCard;
