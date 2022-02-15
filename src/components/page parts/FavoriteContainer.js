import React, {useState, useEffect} from 'react'
import FavoriteCard from './FavoriteCard'
import * as Mui from '@mui/material';

function FavoriteContainer() {
  const [favRecipes, setFavRecipes] = useState([])
  const [filter, setFilter] = useState("")

  useEffect(() => {
    fetch("http://localhost:8000/recipes")
    .then(resp => resp.json())
    .then(data => setFavRecipes(data))
  }, [])

  function handleDelete (id) {
      const updatedRecipes = favRecipes.filter(recipe => {
        return recipe.id !== id
      })
     setFavRecipes(updatedRecipes)
  }

  const filteredRecipes = favRecipes.filter(recipe => {
    return recipe.title.toLowerCase().includes(filter.toLowerCase())
  })

  return (
    <div>
        <Mui.TextField id="filled-basic" label="Filter" variant="filled" value={filter} onChange={e => setFilter(e.target.value)}></Mui.TextField>
        {filteredRecipes.map(recipe => {
          return <FavoriteCard key={recipe.id} recipe={recipe} onDelete={handleDelete}/>
        })}
    </div>
  )
}

export default FavoriteContainer