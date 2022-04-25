import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { CardActionArea } from "@mui/material";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import Tooltip from '@mui/material/Tooltip';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function RecipeCard({recipe, favRecipes, toggleSwitch}) {
  const [isClicked, setIsClicked] = useState(false)

  function handleClick() {
    setIsClicked(true)
    const clickedRecipes = favRecipes.find(favRecipe => {
      return favRecipe.title === recipe.title
    })
    if (clickedRecipes) {alert("Already added to favorites!")}
    if (!clickedRecipes) {
      fetch("https://over-and-under-json-server.herokuapp.com/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: recipe.title,
          image: recipe.image,
          calorie: recipe.nutrition.nutrients[0].name,
          protein: recipe.nutrition.nutrients[1].name,
          carb: recipe.nutrition.nutrients[2].name,
          calorieAmount: recipe.nutrition.nutrients[0].amount,
          proteinAmount: recipe.nutrition.nutrients[1].amount,
          carbAmount: recipe.nutrition.nutrients[2].amount,
        })
      })
      .then(resp => resp.json())
      .then(data => console.log(data))
    }
  }
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="reciperesults-animation">
      <Card className="recipe-card" variant="outlined" style={{background: toggleSwitch ? "#D3ECA7" : "#FFFDA2", transition: "1s"}} sx={{ maxWidth: 305, boxShadow: 1, p: 2}}>
      <Tooltip title="View recipe"><Link className="recipecard-link"to={`/reciperesults/${recipe.id}`}><CardActionArea>
      <CardHeader className="recipecard-header"
        title={recipe.title}
        style={{color: toggleSwitch ? "#632626" : "#A90409", transition: "1s"}}
      />
      <CardMedia
        component="img"
        height="194"
        image={recipe.image}s
        alt={recipe.title}
      />
      </CardActionArea></Link></Tooltip>
      <CardActions disableSpacing>
        <Tooltip title="Add to favorites"><IconButton aria-label="add to favorites" disabled={isClicked}>
          <FavoriteIcon style={{color: isClicked ? "#D1D1D1" :"#FF6363"}} onClick={handleClick} />
        </IconButton></Tooltip>
        <Typography variant="h6" style={{paddingLeft: "60px", color: toggleSwitch ? "#632626" : "#A90409", transition: "1s"}}><RestaurantOutlinedIcon /> Nutrition</Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon style={{color: toggleSwitch ? "#632626" : "#A90409"}} />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent style={{color: toggleSwitch ? "#632626" : "#A90409"}}>
          <Typography paragraph>
            <li>{recipe.nutrition.nutrients[0].name} : {recipe.nutrition.nutrients[0].amount} kcal</li>
            <li>{recipe.nutrition.nutrients[1].name} : {recipe.nutrition.nutrients[1].amount} g</li>
            <li>{recipe.nutrition.nutrients[2].name} : {recipe.nutrition.nutrients[2].amount} g</li>
          </Typography>
        </CardContent>
      </Collapse>
      </Card>
    </div>
  )
}

export default RecipeCard