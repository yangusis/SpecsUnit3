import { useNavigate } from "react-router-dom";
import DetailScreen from "../detailComponents/DetailScreen";
import classes from "./RecipeCard.module.css";

const RecipeCard = (props) => {
  const { recipe } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipe/${recipe.recipe_id}`);
  };

  return (
    <div className={classes.rCard}>
      <img src="https://www.simplyrecipes.com/thmb/HUDjaojXry70l9yI4XLBttTkOYk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Unicorn-Cake-Lead-1-30eccf41bba749958631c1a011317d81.jpg"></img>
      <p>Cake</p>
      <button onClick={handleClick}>See More</button>
    </div>
  );
};

export default RecipeCard;
