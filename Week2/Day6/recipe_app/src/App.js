import "./App.css";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import RecipeForm from "./components/RecipeForm";
import RecipeTable from "./components/RecipeTable";

import IngredientForm from "./components/IngredientForm";
import IngredientTable from "./components/IngredientTable";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [recipeToEdit, setRecipeToEdit] = useState(null);

  const [ingredients, setIngredients] = useState([]);
  const [ingredientToEdit, setIngredientToEdit] = useState(null);

  function onRecipeCreated(recipe) {
    setRecipeToEdit(null);
    setRecipes([...recipes, recipe]);
  }

  function onRecipeDelete(recipe) {
    setRecipes(recipes.filter((x) => x.name !== recipe.name));
  }

  function onRecipeEdit(recipe) {
    setRecipeToEdit(recipe);
    setRecipes(recipes.filter((x) => x.name !== recipe.name));
  }

  function onIngredientCreated(ingredient) {
    setIngredientToEdit(null);
    setIngredients([...ingredients, ingredient]);
  }

  function onIngredientDelete(ingredient) {
    setIngredients(ingredients.filter((x) => x.name !== ingredient.name));
  }

  function onIngredientEdit(ingredient) {
    setIngredientToEdit(ingredient);
    setIngredients(ingredients.filter((x) => x.name !== ingredient.name));
  }

  return (
    <div className="text-center m-5">
      <div className="card p-4">
        <RecipeForm
          recipeToEdit={recipeToEdit}
          onRecipeCreated={onRecipeCreated}
        ></RecipeForm>
        {/* <IngredientForm
          ingredientToEdit={ingredientToEdit}
          onIngredientCreated={onIngredientCreated}
        ></IngredientForm>
        <IngredientTable
          ingredients={ingredients}
          onIngredientEdit={onIngredientEdit}
          onIngredientDelete={onIngredientDelete}
        ></IngredientTable> */}
        <RecipeTable
          recipes={recipes}
          onRecipeEdit={onRecipeEdit}
          onRecipeDelete={onRecipeDelete}
        ></RecipeTable>
      </div>
    </div>
  );
}

export default App;
