import React, {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import * as Mui from '@mui/material';

function AdvancedSearch({search, onAdvSearch, onToggleAdvSearch, onClose, toggleSwitch}) {
  const [mealType, setMealType] = useState("")
  const [cuisine, setCuisine] = useState("")
  const [diet, setDiet] = useState("")
  const [intolerence, setIntolerence] = useState("")
  const [ingredients, setIngredients] = useState("")
  const [carbs, setCarbs] = useState(20)
  const [protein, setProtein] = useState(10)
  const [calories, setCalories] = useState(200)
  const history = useHistory()

  console.log(toggleSwitch)

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

  useEffect(()=> {
    if (toggleSwitch) {
      setCarbs(0)
      setProtein(0)
      setCalories(0)
    } else {
      setCarbs(20)
      setProtein(10)
      setCalories(200)
    }
  }, [toggleSwitch])

 
  
  return (
    <div>
      <Mui.Typography align='center' variant="h3">{toggleSwitch ? "Under" : "Over"}</Mui.Typography>
      <Mui.Typography align='center'><Mui.TextField label="Include Ingredients" variant="outlined" margin='dense' value={ingredients} onChange={e => setIngredients(e.target.value)} ></Mui.TextField></Mui.Typography>
        <br/>
      <form onSubmit={handleSubmit}>
        <div class="select-style">
        <select sx={{ px: 7 }} variant='outlined' value={mealType} onChange={e => setMealType(e.target.value)}>
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
        <br/>
        <select variant='outlined' value={cuisine} onChange={e => setCuisine(e.target.value)}>
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
        <br/>
        <select variant='outlined' value={diet} onChange={e => setDiet(e.target.value)}>
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
        <br/>
        <select variant='outlined'  value={intolerence} onChange={e => setIntolerence(e.target.value)}>
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
        </div>

        <Mui.Typography sx={{ ml: 8 }} variant="h6" component="label">{toggleSwitch ? "Max Carbs (At Max 40g)" : "Min Carbs (At Least 20g)"}</Mui.Typography>
        <div class="select-style"><input margin-left="20px" type="number" min={toggleSwitch ? "0" : "20"} max={toggleSwitch ? "40" : "99999"} value={carbs} onChange={e => setCarbs(e.target.value)}></input></div>
        <br/>
        <Mui.Typography sx={{ ml: 8 }} variant="h6" component="label">{toggleSwitch ? "Max Protein (At Max 30g)" : "Min Protein (At Least 10g)"}</Mui.Typography>
        <div class="select-style"><input type="number" min={toggleSwitch ? "0" : "10"} max={toggleSwitch ? "30" : "99999"} value={protein} onChange={e => setProtein(e.target.value)}></input></div>
        <br/>
        <Mui.Typography sx={{ ml: 8 }} variant="h6" component="label">{toggleSwitch ? "Max Calories (At Max 600)" : "Min Calories (At Least 200)"}</Mui.Typography>
        <div class="select-style"><input type="number" min={toggleSwitch ? "0" : "200"} max={toggleSwitch ? "600" : "99999"} value={calories} onChange={e => setCalories(e.target.value)}></input></div>
        <br/>
        <Mui.Button variant="outlined" onClick={onClose}>Back</Mui.Button><Mui.Button sx={{ ml: 20 }} type="submit" variant="outlined" onClick={onToggleAdvSearch}>Search</Mui.Button>
        
      </form>
      
      
    </div>
    
  )
}

export default AdvancedSearch