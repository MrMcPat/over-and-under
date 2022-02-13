import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import { Route, Link, NavLink } from "react-router-dom";
import * as Mui from '@mui/material';
import AdvancedSearch from './AdvancedSearch'

function Search({onSearch, onAdvSearch}) {
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
      <form onSubmit={handleSubmit}>
        <Mui.TextField id="filled-basic" label="Search" variant="filled" value={search} onChange={e => setSearch(e.target.value)}/>

        <Mui.Button type="submit" variant="outlined">Search</Mui.Button>

      </form>
      <NavLink to="/advancedsearch"><Mui.Button>Adv Search</Mui.Button></NavLink>
         <Route path="/advancedsearch">
          <AdvancedSearch onAdvSearch={onAdvSearch} search={search}/>
        </Route>
    </div>
  )
}

export default Search