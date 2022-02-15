import React, { useState, useEffect, useRef } from "react";
import { Route, Switch } from "react-router-dom";
import * as Mui from "@mui/material";
import Search from "./page parts/Search";
import RecipeContainer from "./page parts/RecipeContainer";
import FavoriteContainer from "./page parts/FavoriteContainer";
import RecipePage from "./page parts/RecipePage";
import HomepageRecipes from "./HomepageRecipes";
import defaultRecipes from "../data/defaultrecipes";

const APIKey1 = "ad6d7e06596a42319494ac3917c53649";
const APIKey2 = "10f404130be14caf8274ea22151509b7";
const APIKey3 = "32b53701d7d54122a094792d559f0252";
const APIKey4 = "706bae3484f3466a81bd4afe4a6b402a";

function Homepage() {
  const [recipes, setRecipes] = useState([])
  const [favRecipes, setFavRecipes] = useState([])
  const [search, setSearch] = useState("")
  const [advSearch, setAdvSearch] = useState({})
  const [toggleSearch, setToggleSearch] = useState(false)
  const [toggleOverUnder, setToggleOverUnder] = useState(false)
  const initRender = useRef(true)

  const URL = toggleSearch ? 
  `https://api.spoonacular.com/recipes/complexSearch?query=${advSearch.search}&cuisine=${advSearch.cuisine}&diet=${advSearch.diet}&intolerences=${advSearch.intolerence}&includeIngredients=${advSearch.ingredients}&type=${advSearch.mealType}&${toggleOverUnder ? "minCarbs" : "maxCarbs"}=${advSearch.carbs}&${toggleOverUnder ? "minProtein" : "maxProtein"}=${advSearch.protein}&${toggleOverUnder ? "minCalories" : "maxCalories"}=${advSearch.calories}&number=2&apiKey=${APIKey1}`
  :`https://api.spoonacular.com/recipes/complexSearch?query=${search}&number=2&apiKey=${APIKey1}`

  function handleSearch (newSearch) {
    setSearch(newSearch)
  }

  function handleAdvSearch (newSearch) {
    setAdvSearch(newSearch)
  }

  function handleToggleSearch() {
    setToggleSearch(false)
  }
  
  function handleToggleAdvSearch() {
    setToggleSearch(true)
  }

  function handleOverUnder (toggle) {
    setToggleOverUnder(toggle => !toggle)
  }

  useEffect(() => {
    if(initRender.current) {initRender.current=false} else {
      fetch(URL)
        .then((resp) => resp.json())
        .then((data) => {
          setRecipes(data.results)
        });
    }
  }, [toggleSearch ? advSearch : search]);

  useEffect(() => {
    fetch("http://localhost:8000/recipes")
    .then(resp => resp.json())
    .then(data => setFavRecipes(data))
  }, [])

  console.log(favRecipes)

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
              <Search onSearch={handleSearch} onAdvSearch={handleAdvSearch} onToggleSearch={handleToggleSearch} onToggleAdvSearch={handleToggleAdvSearch} onOverUnder={handleOverUnder}/>
            </Mui.Typography>
            <Mui.Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            ></Mui.Stack>
          </Mui.Container>

          <Switch>
            <Route path="/favoriterecipes">
              <FavoriteContainer />
            </Route>
            <Route exact path="/reciperesults">
              <RecipeContainer recipes={recipes} />
            </Route>
            <Route path="/reciperesults/:id">
              <RecipePage favRecipes={favRecipes}/>
            </Route>
          </Switch>
        </Mui.Box>

          {/* <HomepageRecipes defaultRecipes={defaultRecipes}/> */}
      </main>
    </div>
  );
}

export default Homepage;
