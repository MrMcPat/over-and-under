import React from 'react'
import { Link, Route } from "react-router-dom";
import * as Mui from "@mui/material";
import RecipePage from './RecipePage';

function RecipeCard({recipe}) {

  return (
    <div>
      {/* <img src={recipe.image} />
      <h1>{recipe.title}</h1>
      <Link to={`/reciperesults/${recipe.id}`}><button>View</button></Link> */}

        <Mui.Container sx={{ py: 8 }} maxWidth="md">
          <Mui.Grid container spacing={4}>
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
                    <Mui.Typography>
                      Dummy Text
                    </Mui.Typography>
                  </Mui.CardContent>
                  <Mui.CardActions>
                    <Link to={`/reciperesults/${recipe.id}`}><Mui.Button size="small">View</Mui.Button></Link>
                  </Mui.CardActions>
                </Mui.Card>
              </Mui.Grid>
          </Mui.Grid>
        </Mui.Container>
    </div>
  )
}

export default RecipeCard