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

function RecipeCard({recipe, favRecipes}) {
  const [isClicked, setIsClicked] = useState(false)

  function handleClick() {
    setIsClicked(true)
    const clickedRecipes = favRecipes.find(favRecipe => {
      return favRecipe.title === recipe.title
    })
    if (clickedRecipes) {alert("Already added to favorites!")}
    if (!clickedRecipes) {
      fetch("http://localhost:8000/recipes", {
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
    <div>
      <Card variant="outlined" sx={{ maxWidth: 305, boxShadow: 1, p: 2}}>
      <CardActionArea>
      <CardHeader
        title={recipe.title}
      />
      <CardMedia
        component="img"
        height="194"
        image={recipe.image}
        alt={recipe.title}
      />
      </CardActionArea>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" disabled={isClicked}>
          <FavoriteIcon onClick={handleClick} />
        </IconButton>
        <Link to={`/reciperesults/${recipe.id}`}><IconButton>
        <RestaurantOutlinedIcon />
        </IconButton></Link>
        <Typography variant="h6" style={{paddingLeft: "50px"}}>Nutrition</Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
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