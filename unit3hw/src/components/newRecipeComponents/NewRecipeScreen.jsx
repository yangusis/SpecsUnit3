import React, { useState } from "react";
import { Formik } from "formik";
import axios from "axios";
import classes from "./NewRecipeScreen.module.css";

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState();
  const [quantity, setQuantity] = useState();

  const addIngredient = () => {
    setIngredients([...ingredients, { name, quantity }]);
    setName("");
    setQuantity("");
  };

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  };

  /*
  ! didn't work, think this needed to be a useEffect of some kind, but couldn't get any of the li
  ! items to make it onto the page
  const formatIngredients = () => {
    for (let i = 0; i++; i < ingredients.length) {
      return (
        <li>
          {ingredients[i].quantity}
          {ingredients[i].name}
        </li>
      );
    }
  };
  */

  const onSubmit = (values, actions) => {
    values.ingredients = ingredients;

    axios.post("https://recipes.devmountain.com/recipes", values);

    console.log(values);
  };

  return (
    <section className={classes.body}>
      <h1>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className={classes.input1}>
              <input
                value={values.recipeName}
                type="text"
                id="recipeName"
                name="recipeName"
                placeholder="Recipe Name"
                onChange={handleChange}
              />
              <input
                value={values.imageURL}
                onChange={handleChange}
                type="text"
                id="imageURL"
                name="imageURL"
                placeholder="Image URL"
              />
            </div>
            <div className={classes.input2}>
              <input
                type="radio"
                id="cook"
                name="category"
                placeholder="Cook"
              />
              <label htmlFor="cook">Cook</label>
              <input
                type="radio"
                id="bake"
                name="category"
                placeholder="Bake"
              />
              <label htmlFor="bake">Bake</label>
              <input
                type="radio"
                id="drink"
                name="category"
                placeholder="Drink"
              />
              <label htmlFor="drink">Drink</label>
            </div>
            <div className={classes.input3}>
              <input
                value={values.prepTime}
                onChange={handleChange}
                type="text"
                id="prepTime"
                name="prepTime"
                placeholder="Prep Time"
              />
              <input
                value={values.cookTime}
                onChange={handleChange}
                type="text"
                id="cookTime"
                name="cookTime"
                placeholder="Cook Time"
              />
              <input
                value={values.serves}
                onChange={handleChange}
                type="text"
                id="serves"
                name="serves"
                placeholder="Serves how many?"
              />
            </div>
            <div className={classes.ingredients}>
              {/*//? ingredients */}
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="ing"
                name="ing"
                placeholder="Ingredient"
              />
              {/*//? quantity */}
              <input
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                type="text"
                id="quantity"
                name="quantity"
                placeholder="# of ingredient"
              />
              {/*ingredients.length > 0 && <ul>{formatIngredients}</ul>*/}
              <button type="button" onClick={addIngredient}>
                Add Ingredient
              </button>
            </div>
            <textarea
              value={values.instructions}
              onChange={handleChange}
              placeholder="What are the instructions?"
              name="instructions"
              id="instructions"
              cols="30"
              rows="10"
            ></textarea>
            <button className={classes.submitButton} type="submit">
              Submit
            </button>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
