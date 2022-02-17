import React, { useState, useEffect, useRef } from "react";
import { Route, Switch } from "react-router-dom";
import * as Mui from "@mui/material";
import Search from "./page parts/Search";
import RecipeContainer from "./page parts/RecipeContainer";
import FavoriteContainer from "./page parts/FavoriteContainer";
import RecipePage from "./page parts/RecipePage";
import HomepageRecipes from "./HomepageRecipes";
import defaultRecipes from "../data/defaultrecipes";
import DinnerDiningOutlinedIcon from '@mui/icons-material/DinnerDiningOutlined';
import appLogoOver from "../assets/over-and-under-over.png"
import appLogoUnder from "../assets/over-and-under-under.png"

const APIKey1 = "ad6d7e06596a42319494ac3917c53649";
const APIKey2 = "10f404130be14caf8274ea22151509b7";
const APIKey3 = "32b53701d7d54122a094792d559f0252";
const APIKey4 = "706bae3484f3466a81bd4afe4a6b402a";

function Homepage({ landingPage, onLandingPage, onNavbar, toggleSwitch}) {
  const [recipes, setRecipes] = useState([])
  const [favRecipes, setFavRecipes] = useState([])
  const [search, setSearch] = useState("")
  const [advSearch, setAdvSearch] = useState({})
  const [toggleSearch, setToggleSearch] = useState(false)
  const initRender = useRef(true)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const URL = toggleSearch ? 
  `https://api.spoonacular.com/recipes/complexSearch?query=${advSearch.search}&cuisine=${advSearch.cuisine}&diet=${advSearch.diet}&intolerences=${advSearch.intolerence}&includeIngredients=${advSearch.ingredients}&type=${advSearch.mealType}&${toggleSwitch ? "minCarbs" : "maxCarbs"}=${advSearch.carbs}&${toggleSwitch ? "minProtein" : "maxProtein"}=${advSearch.protein}&${toggleSwitch ? "minCalories" : "maxCalories"}=${advSearch.calories}&number=12&apiKey=${APIKey3}`
  :`https://api.spoonacular.com/recipes/complexSearch?query=${search}&minCarbs=0&minProtein=0&minCalories=0&number=12&apiKey=${APIKey3}`

  function handleSearch (newSearch) {
    setSearch(newSearch)
  }

  function handleAdvSearch (newSearch) {
    setAdvSearch(newSearch)
    setOpen(false)
  }

  function handleToggleSearch() {
    setToggleSearch(false)
  }
  
  function handleToggleAdvSearch() {
    setToggleSearch(true)
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

  return (
    <div>
        <Mui.Box className="homepage" sx={{bgcolor: "background.paper", pt: 8, pb: 6,}} style={{background: "transparent"}}>
          <Mui.Container maxWidth="sm">
            <Mui.Typography component="div" variant="h2" align="center" color="text.primary" gutterBottom>
            <Mui.Typography className={landingPage ? "display-none" : ""}component="h2" variant="h2"><img src={toggleSwitch ? appLogoUnder : appLogoOver} style={{height: "120px", width: "300px"}}></img><br/>
            <Mui.Button style={{fontSize: "20px" , color: toggleSwitch ? "#9c563c" : "#A90409"}} onClick={onLandingPage}><DinnerDiningOutlinedIcon />Get Started</Mui.Button></Mui.Typography>
            <Search onSearch={handleSearch} onAdvSearch={handleAdvSearch} onToggleSearch={handleToggleSearch} onToggleAdvSearch={handleToggleAdvSearch} landingPage={landingPage} onLandingPage={onLandingPage} onNavbar={onNavbar} open={open} setOpen={setOpen} handleOpen={handleOpen} handleClose={handleClose} toggleSwitch={toggleSwitch}/>
            <HomepageRecipes defaultRecipes={defaultRecipes} toggleSwitch={toggleSwitch} landingPage={landingPage} onLandingPage={onLandingPage}/>
            </Mui.Typography>
            <Mui.Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center"></Mui.Stack>
          </Mui.Container>

          <Switch>
            <Route path="/favoriterecipes">
              <FavoriteContainer toggleSwitch={toggleSwitch}/>
            </Route>
            <Route exact path="/reciperesults">
              <RecipeContainer recipes={recipes} toggleSwitch={toggleSwitch}/>
            </Route>
            <Route path="/reciperesults/:id">
              <RecipePage favRecipes={favRecipes} toggleSwitch={toggleSwitch}/>
            </Route>
          </Switch>
        </Mui.Box>


    </div>
  );
}

export default Homepage;
