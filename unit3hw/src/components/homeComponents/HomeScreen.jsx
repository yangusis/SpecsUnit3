import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import AdBanner from "./AdBanner";
import RecipeCard from "./RecipeCard";
import classes from "./HomeScreen.module.css";

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  const getRecipes = () => {
    axios.get("https://recipes.devmountain.com/recipes").then((res) => {
      setRecipes(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    getRecipes();
  }, []);

  const recipeDisplay = recipes
    .filter((recipe, index) => {
      let title = recipe.recipe_name.toLowerCase();
      let searchParams = search.toLowerCase();
      return title.includes(searchParams);
    })
    .map((recipe, index) => {
      return <RecipeCard recipe={recipe} />;
    });

  return (
    <div>
      <AdBanner />
      <div className={classes.searchBar}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          ghostTxt="Search for a Recipe"
        ></input>
      </div>
      {recipeDisplay}
    </div>
  );
};

export default HomeScreen;
