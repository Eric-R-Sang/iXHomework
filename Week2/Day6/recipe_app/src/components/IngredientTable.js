import React from 'react';

export default function IngredientTable(props) {
  return (
    <div>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody id="table-body">
          {props.ingredients.map((ingredient, index) => {

            return (
              <tr key={index}>
                <td>{ingredient.name}</td>
                <td>{ingredient.quantity}</td>
                <td>
                  <button
                    className="btn btn-danger bn-sm me-1"
                    onClick={() => props.onIngredientDelete(ingredient)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-warning bn-sm ms-1"
                    onClick={() => props.onIngredientEdit(ingredient)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}