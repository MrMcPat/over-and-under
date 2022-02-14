import React, {useState, useEffect} from 'react'
import FavoriteCard from './FavoriteCard'

function FavoriteContainer() {
  const [favRecipes, setFavRecipes] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/recipes")
    .then(resp => resp.json())
    .then(data => setFavRecipes(data))
  }, [])

  function handleDelete (id) {
      const updatedRecipes = favRecipes.filter(recipe => {
        console.log("recipe", recipe.id, "id", id)
        return recipe.id !== id
      })
     setFavRecipes(updatedRecipes)

  }

  return (
    <div>
        {favRecipes.map(recipe => {
          return <FavoriteCard key={recipe.id} recipe={recipe} onDelete={handleDelete}/>
        })}
    </div>
  )
}

export default FavoriteContainer