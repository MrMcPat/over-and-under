import React from 'react'
import { Route } from "react-router-dom";
import * as Mui from '@mui/material';
import AdvancedSearch from './AdvancedSearch'

function Search() {
  return (
    <div>
      <form>
        <Mui.TextField id="filled-basic" label="Search" variant="filled" />
        <Mui.Button type="submit" variant="outlined">Search</Mui.Button>
      </form>
         <Route path="/advancedsearch">
          <AdvancedSearch />
        </Route>
    </div>
  )
}

export default Search