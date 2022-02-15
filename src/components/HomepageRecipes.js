import React from 'react'
import { Link } from "react-router-dom";
import * as Mui from "@mui/material";

function HomepageRecipes({defaultRecipes}) {

  return (
    <Mui.Container sx={{ py: 8 }} maxWidth="md">
    <Mui.Grid container spacing={4}>
      {defaultRecipes.map(recipe => (
        <Mui.Grid item key={recipe.recipeId} xs={12} sm={6} md={4}>
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
              alt={recipe.title}
            />
            <Mui.CardContent sx={{ flexGrow: 1 }}>
              <Mui.Typography gutterBottom variant="h5" component="h2">
                {recipe.title}
              </Mui.Typography>
            </Mui.CardContent>
            <Mui.CardActions>
                <Link to={`/reciperesults/${recipe.recipeId}`}><Mui.Button size="small">View</Mui.Button></Link>
            </Mui.CardActions>
          </Mui.Card>
        </Mui.Grid>
      ))}
    </Mui.Grid>
  </Mui.Container>
  )
}

export default HomepageRecipes