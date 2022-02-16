import React, {useState, useEffect} from 'react'
import { NavLink, useHistory } from "react-router-dom";
import * as Mui from '@mui/material';

function AdvancedSearch({search, onAdvSearch, onToggleAdvSearch, onOverUnder, onBackgroundColor}) {
  const [toggleOverUnder, setToggleOverUnder] = useState(sessionStorage.getItem("sessionStorageKey") || false)
  const [mealType, setMealType] = useState("")
  const [cuisine, setCuisine] = useState("")
  const [diet, setDiet] = useState("")
  const [intolerence, setIntolerence] = useState("")
  const [ingredients, setIngredients] = useState("")
  const [carbs, setCarbs] = useState(20)
  const [protein, setProtein] = useState(10)
  const [calories, setCalories] = useState(200)
  const history = useHistory()

  function handleSubmit (e) {
    e.preventDefault();
    const advSearchData = {
      search: search,
      mealType: mealType,
      cuisine: cuisine,
      diet: diet,
      intolerence: intolerence,
      ingredients: ingredients,
      carbs: carbs,
      protein: protein,
      calories: calories
    }
    onAdvSearch(advSearchData)
    history.push({
      pathname: "/reciperesults",
    })
  }

  useEffect(() => {
    sessionStorage.setItem("sessionStorageKey", toggleOverUnder)
  }, [toggleOverUnder])

  function handleOverUnder () {
    setToggleOverUnder(toggleOverUnder => !toggleOverUnder)
    onOverUnder(toggleOverUnder)
    onBackgroundColor()
    if(toggleOverUnder) {
      setCarbs(20)
      setProtein(10)
      setCalories(200)
    } else {
      setCarbs(0)
      setProtein(0)
      setCalories(0)
    }
  }

  
  return (
    <div>
      <NavLink to="/"><Mui.Button>Back</Mui.Button></NavLink>
      <Mui.Typography variant="h6">{toggleOverUnder ? "Under" : "Over"}</Mui.Typography>
      <form onSubmit={handleSubmit}>
        <select value={mealType} onChange={e => setMealType(e.target.value)}>
          <option value="">Select Meal Type</option>
          <option value="">Main Course</option>
          <option value="">Side Dish</option>
          <option value="">Dessert</option>
          <option value="">Appetizer</option>
          <option value="">Salad</option>
          <option value="">Bread</option>
          <option value="">Breakfast</option>
          <option value="">Soup</option>
          <option value="">Beverage</option>
          <option value="">Sauce</option>
          <option value="">Marinade</option>
          <option value="">Fingerfood</option>
          <option value="">Snack</option>
          <option value="">Drink</option>
        </select>
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
        <Mui.TextField label="Include Ingredients" variant="standard" value={ingredients} onChange={e => setIngredients(e.target.value)}></Mui.TextField>
        <br/>
        <Mui.Typography variant="h6" component="label">{toggleOverUnder ? "Max Carbs" : "Min Carbs"}</Mui.Typography>
        <input type="number" min={toggleOverUnder ? "0" : "20"} max={toggleOverUnder ? "40" : "99999"} value={carbs} onChange={e => setCarbs(e.target.value)}></input>
        <br/>
        <Mui.Typography variant="h6" component="label">{toggleOverUnder ? "Max Protein" : "Min Protein"}</Mui.Typography>
        <input type="number" min={toggleOverUnder ? "0" : "10"} max={toggleOverUnder ? "30" : "99999"} value={protein} onChange={e => setProtein(e.target.value)}></input>
        <br/>
        <Mui.Typography variant="h6" component="label">{toggleOverUnder ? "Max Calories" : "Min Calories"}</Mui.Typography>
        <input type="number" min={toggleOverUnder ? "0" : "200"} max={toggleOverUnder ? "600" : "99999"} value={calories} onChange={e => setCalories(e.target.value)}></input>
        <Mui.Button type="submit" variant="outlined" onClick={onToggleAdvSearch}>Search</Mui.Button>
        <Mui.Switch defaultChecked color="warning" onClick={handleOverUnder}/>
      </form>

    </div>
  )
}

export default AdvancedSearch