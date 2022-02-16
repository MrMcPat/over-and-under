import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import { Route, NavLink, Switch } from "react-router-dom";
import * as Mui from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import AdvancedSearch from './AdvancedSearch'
import RecipeContainer from "./RecipeContainer";
import FavoriteContainer from "./FavoriteContainer";
import RecipePage from "./RecipePage";


function Search({onSearch, onAdvSearch, onToggleSearch, onToggleAdvSearch, onOverUnder, onBackgroundColor, landingPage, onNavbar}) {
  const [search, setSearch] = useState("")
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(search)
    onNavbar()
    history.push({
      pathname: "/reciperesults",
    })
  }

  return (
    <div className={landingPage ? "display-search" : "display-none-search"} style={{display: landingPage ? "" : "none"}}>
      <Mui.Typography align="center">
      <form id="form-container" autoComplete="off" onSubmit={handleSubmit}>
        <Mui.Typography variant="h6">So do you want to go Over or Under?</Mui.Typography>
        <Mui.TextField id="filled-basic" label="Search" variant="standard" value={search}  onChange={e => setSearch(e.target.value)}/>
        <NavLink className="advanced-search-icon" to="/advancedsearch"><SettingsIcon/></NavLink>
        <Mui.Fab type="submit" color="primary" onClick={onToggleSearch} size="small">
          <SearchIcon />
        </Mui.Fab>
      </form>
      </Mui.Typography>

         <Route path="/advancedsearch">
          <AdvancedSearch onAdvSearch={onAdvSearch} search={search} onToggleAdvSearch={onToggleAdvSearch} onOverUnder={onOverUnder} onBackgroundColor={onBackgroundColor}/>
        </Route>
        
    </div>
  )
}

export default Search