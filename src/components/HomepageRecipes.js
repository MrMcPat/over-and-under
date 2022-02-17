import React from "react";
import { Link } from "react-router-dom";
import * as Mui from "@mui/material";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function HomepageRecipes({ defaultRecipes, landingPage, onLandingPage}) {

  const recipeCarousel = defaultRecipes.map(recipe => {
    return <Carousel.Item key={recipe.recipeId}>
      <img className="d-block w-100" style={{textShadow: "1px black"}} src={recipe.image} alt={recipe.title}/>
      <Carousel.Caption>
        <h3>{recipe.title}</h3>
        <Link style={{textDecoration: "none"}} to={`/reciperesults/${recipe.recipeId}`}><Mui.Button style={{color: "white"}} style={{fontSize: "20px", color: "white"}} onClick={onLandingPage}>View</Mui.Button></Link>
      </Carousel.Caption>
    </Carousel.Item>
  })

  return (
    <div style={{boxShadow: "8px 8px 1px #876445"}}>
      <Carousel className={landingPage ? "carousel carousel-display-none" : "carousel"}>
        {recipeCarousel}
      </Carousel>
    </div>
  );
}

export default HomepageRecipes;
