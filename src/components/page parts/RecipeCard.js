import React from 'react'
import { Link } from "react-router-dom";
import * as Mui from "@mui/material";

function RecipeCard({recipe}) {

  return (
    <div>
              <Mui.Grid item key={recipe.id} xs={1} sm={1} md={4}>
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
                  </Mui.CardActions>
                </Mui.Card>
              </Mui.Grid>
    </div>
  )
}

export default RecipeCard