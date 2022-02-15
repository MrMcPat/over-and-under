import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import { Route, NavLink } from "react-router-dom";
import * as Mui from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import AdvancedSearch from './AdvancedSearch'

function Search({onSearch, onAdvSearch, onToggleSearch, onToggleAdvSearch, onOverUnder}) {
  const [search, setSearch] = useState("")
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(search)
    history.push({
      pathname: "/reciperesults",
    })
  }

  return (
    <div>
      <form id="form-container" onSubmit={handleSubmit}>
        <Mui.TextField id="filled-basic" label="Search" variant="standard" value={search} onChange={e => setSearch(e.target.value)}/>
        <NavLink to="/advancedsearch"><SettingsIcon/></NavLink>
        <Mui.Fab type="submit" color="primary" onClick={onToggleSearch} size="small">
          <SearchIcon />
        </Mui.Fab>
      </form>


         <Route path="/advancedsearch">
          <AdvancedSearch onAdvSearch={onAdvSearch} search={search} onToggleAdvSearch={onToggleAdvSearch} onOverUnder={onOverUnder}/>
        </Route>
    </div>
  )
}

export default Search