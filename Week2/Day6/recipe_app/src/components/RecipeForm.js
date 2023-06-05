import React, { useState, useEffect } from 'react';
import { Recipe } from '../models/recipe';

export default function RecipeForm(props) {
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');

  // React hook that runs a function anytime a given variable/object changes
  useEffect(() => {
    if (props.recipeToEdit) {
      setName(props.recipeToEdit.name);
      setDuration(props.recipeToEdit.duration);
      setIngredients(props.recipeToEdit.ingredients);
      setSteps(props.recipeToEdit.steps);
    }
  }, [props.recipeToEdit]);

  function onRecipeFormSubmit(e) {
    e.preventDefault();

    if (!isValid()) {
      return;
    }

    let recipe = new Recipe(name, duration, ingredients, steps);
    props.onRecipeCreated(recipe);
    clearInputs();
  }

  function isValid() {
    return name !== '' && duration !== '' && ingredients !== '' && steps !== '';
  }

  function clearInputs() {
    setName('');
    setDuration('');
    setIngredients('');
    setSteps('');
  }

  return (
    <div>
      <h1>Recipe List</h1>

      <form id="form" onSubmit={onRecipeFormSubmit}>
        <div className="mb-3">
          <label className="form-label"> Name </label>
          <input
            id="name-input"
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label"> Duration </label>
          <input
            id="duration-input"
            type="text"
            className="form-control"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label"> Ingredients </label>
          <input
            id="ingredients-input"
            type="text"
            className="form-control"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label"> Steps </label>
          <input
            id="steps-input"
            type="text"
            className="form-control"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />
        </div>

        <div className="d-grid mt-4 mb-4">
          <button className="btn btn-outline-primary" type="submit">
            {props.recipeToEdit ? 'Update Recipe' : 'Add Recipe'}
          </button>
        </div>
      </form>
    </div>
  );
}