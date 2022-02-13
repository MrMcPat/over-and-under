import React, { useState, useEffect, useRef } from "react";
import { Route, Switch } from "react-router-dom";
import * as Mui from "@mui/material";
import Search from "./page parts/Search";
import RecipeContainer from "./page parts/RecipeContainer";
import FavoriteContainer from "./page parts/FavoriteContainer";

const APIKey1 = "ad6d7e06596a42319494ac3917c53649";
const APIKey2 = "10f404130be14caf8274ea22151509b7";
const APIKey3 = "32b53701d7d54122a094792d559f0252";
const APIKey4 = "706bae3484f3466a81bd4afe4a6b402a";

function Homepage() {
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  const [advSearch, setAdvSearch] = useState({})
  const initRender = useRef(true)

  function handleSearch (newSearch) {
    setSearch(newSearch)
  }

  function handleAdvSearch (newSearch) {
    setAdvSearch(newSearch)
  }
  console.log(advSearch)

  useEffect(() => {
    if(initRender.current) {initRender.current=false} else {
      fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${search}&cuisine=${advSearch.cuisine}&number=2&apiKey=${APIKey1}`//sample GET request limited to only 2
      )
        .then((resp) => resp.json())
        .then((data) => {setRecipes(data.results)
        });
    }
  }, [search]);


  return (
    <div>
      <main>
        <Mui.Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Mui.Container maxWidth="sm">
            <Mui.Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              <Search onSearch={handleSearch} onAdvSearch={handleAdvSearch}/>
            </Mui.Typography>
            <Mui.Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            ></Mui.Stack>
          </Mui.Container>

          <Switch>
            <Route path="/reciperesults">
              <RecipeContainer recipes={recipes} />
            </Route>
            <Route path="/favoriterecipes">
              <FavoriteContainer />
            </Route>
          </Switch>
        </Mui.Box>

        {/* <Mui.Container sx={{ py: 8 }} maxWidth="md">
          <Mui.Grid container spacing={4}>
            {recipes.map(recipe => (
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
                    image="https://cdn.shopify.com/s/files/1/0054/4371/5170/products/PatrickStar_467pin.png?v=1627414164"
                    alt="random"
                  />
                  <Mui.CardContent sx={{ flexGrow: 1 }}>
                    <Mui.Typography gutterBottom variant="h5" component="h2">
                      Recipe Title
                    </Mui.Typography>
                    <Mui.Typography>
                      Dummy Text
                    </Mui.Typography>
                  </Mui.CardContent>
                  <Mui.CardActions>
                    <Mui.Button size="small">View</Mui.Button>
                  </Mui.CardActions>
                </Mui.Card>
              </Mui.Grid>
            ))}
          </Mui.Grid>
        </Mui.Container> */}
      </main>
    </div>
  );
}

export default Homepage;
