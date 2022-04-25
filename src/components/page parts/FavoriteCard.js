import React from "react";
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
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
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

function FavoriteCard({ recipe, toggleSwitch, onDelete }) {
  function handleClick() {
    console.log(recipe);
    fetch(`https://over-and-under-json-server.herokuapp.com/recipes/${recipe.id}`, {
      method: "DELETE",
    })
      .then(resp => resp.json())
      .then(() => onDelete(recipe.id));
  }

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let extractedId = recipe.image.split('/recipeImages/')[1].split('-')[0]

  return (
    <div className={`favoritelist favoritelist-animation-${recipe.id}`}>
      <Card variant="outlined" style={{background: toggleSwitch ? "#D3ECA7" : "#FFFDA2", transition: "1s"}} sx={{ maxWidth: 305, boxShadow: 1, p: 2}}>
      <Tooltip title="View recipe"><Link className="recipecard-link" to={`/reciperesults/${extractedId}`}><CardActionArea>
      <CardHeader
        title={recipe.title}
        className="recipecard-header"
        style={{color: toggleSwitch ? "#632626" : "#A90409", transition: "1s"}}
      />
      <CardMedia
        component="img"
        height="194"
        image={recipe.image}
        alt={recipe.title}
      />
      </CardActionArea></Link></Tooltip>
      <CardActions disableSpacing>
        <Tooltip title="Delete from favorites"><IconButton aria-label="Delete">
          <DeleteOutlineOutlinedIcon style={{color: "grey"}}onClick={handleClick}/>
        </IconButton></Tooltip>
        <Typography variant="h6" style={{paddingLeft: "60px", color: toggleSwitch ? "#632626" : "#A90409", transition: "1s"}}><RestaurantOutlinedIcon /> Nutrition</Typography>
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
        <CardContent style={{color: toggleSwitch ? "#632626" : "#A90409", transition: "1s"}}>
          <Typography paragraph>
            <li>{recipe.calorie} : {recipe.calorieAmount} kcal</li>
            <li>{recipe.protein} : {recipe.proteinAmount} g</li>
            <li>{recipe.carb} : {recipe.carbAmount} g</li>
          </Typography>
        </CardContent>
      </Collapse>
      </Card>
    </div>
  );
}

export default FavoriteCard;