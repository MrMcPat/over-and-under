import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import * as Mui from '@mui/material';

function AdvancedSearch({search, onAdvSearch}) {
  const [cuisine, setCuisine] = useState("")
  const [diet, setDiet] = useState("")
  const [intolerence, setIntolerence] = useState("")
  const [ingredients, setIngredients] = useState("")
  const [minCarbs, setMinCarbs] = useState("45")
  const [minProtein, setMinProtein] = useState("30")
  const [minCalories, setMinCalories] = useState("500")
  const history = useHistory()

  function handleSubmit (e) {
    e.preventDefault();
    const advSearchData = {
      search: search,
      cuisine: cuisine,
      diet: diet,
      intolerence: intolerence,
      ingredients: ingredients,
      minCarbs: minCarbs,
      minProtein: minProtein,
      minCalories: minCalories
    }
    onAdvSearch(advSearchData)
    history.push({
      pathname: "/reciperesults",
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      {/* Cuisine/intolerence/diet/includeingredients/minmaxcarbs/minmaxprotein/minmaxcalories/number */}
        <select value={cuisine} onChange={e => setCuisine(e.target.value)}>
          <option value="">Select Cuisine</option>
          <option value="african">African</option>
          <option value="american">American</option>
          <option value="british">British</option>
          <option value="cajun">Cajun</option>
          <option value="caribbean">Caribbean</option>
          <option value="chinese">Chinese</option>
          <option value="eastern european">Eastern European</option>
          <option value="german">German</option>
          <option value="greek">Greek</option>
          <option value="indian">Indian</option>
          <option value="rish">Irish</option>
          <option value="italian">Italian</option>
          <option value="japanese">Japanese</option>
          <option value="jewish">Jewish</option>
          <option value="korean">Korean</option>
          <option value="latin american">Latin American</option>
          <option value="mediterranean">Mediterranean</option>
          <option value="mexican">Mexican</option>
          <option value="middle eastern">Middle Eastern</option>
          <option value="nordic">Nordic</option>
          <option value="southern">Southern</option>
          <option value="spanish">Spanish</option>
          <option value="thai">Thai</option>
          <option value="vietnamese">Vietnamese</option>
        </select>
        <select value={diet} onChange={e => setDiet(e.target.value)}>
          <option value="">Select Diet</option>
          <option value="gluten free">Gluten Free</option>
          <option value="ketogenic">Ketogenic</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="lacto-vegetarian">No Eggs</option>
          <option value="ovo-vegetarian">Lactose Intolerant</option>
          <option value="vegan">Vegan</option>
          <option value="pescetarian">Pescetarian</option>
          <option value="paleo">Paleo</option>
        </select>
        <select value={intolerence} onChange={e => setIntolerence(e.target.value)}>
          <option value="">Select Intolerence</option>
          <option value="dairy">Dairy</option>
          <option value="egg">Egg</option>
          <option value="gluten">Gluten</option>
          <option value="grain">Grain</option>
          <option value="peanut">Peanut</option>
          <option value="seafood">Seafood</option>
          <option value="sesame">Sesame</option>
          <option value="shellfish">Shellfish</option>
          <option value="soy">Soy</option>
          <option value="sulfite">Sulfite</option>
          <option value="tree nut">Tree Nut</option>
          <option value="wheat">Wheat</option>
        </select>
        <Mui.TextField label="Include Ingredients" value={ingredients} onChange={e => setIngredients(e.target.value)}></Mui.TextField>
        <input type="number" min="45" value={minCarbs} onChange={e => setMinCarbs(e.target.value)}></input>
        <input type="number" min="30" value={minProtein} onChange={e => setMinProtein(e.target.value)}></input>
        <input type="number" min="500" value={minCalories} onChange={e => setMinCalories(e.target.value)}></input>
        <Mui.Button type="submit" variant="outlined">Search</Mui.Button>
      </form>

    </div>
  )
}

export default AdvancedSearch