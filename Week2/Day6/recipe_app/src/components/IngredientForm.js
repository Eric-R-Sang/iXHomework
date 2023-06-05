import React, { useState, useEffect } from 'react';
import { Ingredient } from '../models/ingredient';

export default function IngredientForm(props) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  // React hook that runs a function anytime a given variable/object changes
  useEffect(() => {
    if (props.ingredientToEdit) {
      setName(props.ingredientToEdit.name);
      setQuantity(props.ingredientToEdit.quantity);
    }
  }, [props.ingredientToEdit]);

  function onIngredientFormSubmit(e) {
    e.preventDefault();

    if (!isValid()) {
      return;
    }

    let ingredient = new Ingredient(name, quantity);
    props.onIngredientCreated(ingredient);
    clearInputs();
  }

  function isValid() {
    return name !== '' && quantity!== '';
  }

  function clearInputs() {
    setName('');
    setQuantity('');
  }

  return (
    <div>
      <h1 className="mt-3">Ingredients</h1>

      <div className="row">
          
        </div>
      <form id="form" onSubmit={onIngredientFormSubmit}>
        <div className="row">
        <div className="mb-3 col-6">
          <label className="form-label"> Name </label>
          <input
            id="title-input"
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3 col-3">
          <label className="form-label"> Quantity </label>
          <input
            id="author-input"
            type="text"
            className="form-control"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        <div className="d-grid mt-4 col-3">
          <button className="btn btn-outline-primary" type="submit">
            {props.bookToEdit ? 'Update Ingredient' : 'Add Ingredient'}
          </button>
        </div>
        </div>
      </form>
    </div>
  );
}