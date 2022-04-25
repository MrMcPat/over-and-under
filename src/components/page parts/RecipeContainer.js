import React, {useState, useEffect} from "react";
import RecipeCard from "./RecipeCard";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function RecipeContainer({ recipes, toggleSwitch }) {
  const[favRecipes, setFavRecipes] = useState([])

  useEffect(() => {
    fetch("https://over-and-under-json-server.herokuapp.com/recipes")
    .then(resp => resp.json())
    .then(data => setFavRecipes(data))
  }, [])

  const recipeCard = recipes.map((recipe) => {
    return <RecipeCard key={recipe.id} recipe={recipe} toggleSwitch={toggleSwitch} favRecipes={favRecipes}/>;
  });

  return (
    <div>
    <Box sx={{ flexGrow: 1, borderRadius: 2, columngap: 2 }}>
      <Grid style={{color: toggleSwitch ? "#632626" : "#A90409", transition: "1s"}} container justifyContent="center" rowGap={10} columnGap={10} spacing={2} >
        {recipes.length === 0 ? <p className="no-content">No results returned (ノಠ益ಠ)ノ彡┻━┻</p> :recipeCard}
      </Grid>
    </Box>
          
    </div>
  );
}

export default RecipeContainer;
