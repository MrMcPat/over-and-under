import React, {useState, useEffect} from 'react'
import FavoriteCard from './FavoriteCard'
import * as Mui from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function FavoriteContainer({toggleSwitch}) {
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
      <Mui.Typography className="favoritelist-animate" align="center" mb={5}><Mui.TextField id="filled-basic" label="Filter" variant="standard" autoComplete="off" value={filter} onChange={e => setFilter(e.target.value)}></Mui.TextField></Mui.Typography>
        <Box sx={{ flexGrow: 1, borderRadius: 2, columngap: 2 }}>
      <Grid container style={{color: toggleSwitch ? "#632626" : "#A90409", transition: "1s"}} justifyContent="center" rowGap={10} columnGap={10} spacing={2} >
      {favRecipes.length === 0 ? "No favorites added (⌯˃̶᷄ ﹏ ˂̶᷄⌯)ﾟ": filteredRecipes.map(recipe => {
          return <FavoriteCard key={recipe.id} recipe={recipe} toggleSwitch={toggleSwitch} onDelete={handleDelete}/>
        })}
      </Grid>
      </Box>
        
    </div>
  )
}

export default FavoriteContainer