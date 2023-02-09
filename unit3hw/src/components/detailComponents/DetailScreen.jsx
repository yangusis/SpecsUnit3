import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import salmon from "../../assets/salmon.jpg";
import AdBanner from "../homeComponents/AdBanner";
import classes from "./DetailScreen.module.css";

const DetailScreen = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);
  const { prep_time, cook_time, serves } = recipe;

  useEffect(() => {
    axios.get(`https://recipes.devmountain.com/recipes/${id}`).then((res) => {
      setRecipe(res.data);
    });
  }, []);

  // not sure why it can't be called here, but can be called in-line
  // const getIngredients = recipe.ingredients.map((ingredient) => {
  //   return <h4>{ingredient}</h4>;
  // });

  return (
    <section>
      {console.log(recipe)}
      <AdBanner />
      <div className={classes.container}>
        <div className={classes.card1}>
          <h2>Recipe</h2>
          <ul>
            <li>Prep Time: {prep_time}</li>
            <li>Cook Time: {cook_time}</li>
            <li>Serves: {serves}</li>
          </ul>
          <h2>Ingredients</h2>
          {recipe.ingredients &&
            recipe.ingredients.map((ing, index) => {
              return (
                <h4>
                  {ing.quantity} {ing.ingredient}
                </h4>
              );
            })}
        </div>
        <div className={classes.card2}>
          <h2>Instructions</h2>
          <p style={{ whiteSpace: "pre-wrap" }}>
            {recipe.instructions && JSON.parse(recipe.instructions)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DetailScreen;
