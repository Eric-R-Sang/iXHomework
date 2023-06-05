import React from "react";

export default function RecipeTable(props) {
  return (
    <div>
      {props.recipes.map((recipe, index) => {
        const accordionId = `accordion-${index}`; 
        
        return (
          <div className="accordion" id={accordionId} key={index}>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse-${index}`} 
                  aria-expanded="true"
                  aria-controls={`collapse-${index}`} 
                >
                  {recipe.name} : {recipe.duration}
                </button>
              </h2>
              <div
                id={`collapse-${index}`} 
                className="accordion-collapse collapse show"
                data-bs-parent={`#${accordionId}`} 
              >
                <div className="accordion-body">
                  <div className="row">
                    <div className="col-4">
                      <h4>Ingredients:</h4>
                      {recipe.ingredients}
                    </div>
                    <div className="col-4">
                      <h4>Directions:</h4>
                      {recipe.steps}
                    </div>
                    <div className="col-4">
                      <button
                        className="btn btn-danger bn-sm me-1"
                        onClick={() => props.onRecipeDelete(recipe)}
                      >
                        Delete
                      </button>
                      <button
                        className="btn btn-warning bn-sm ms-1"
                        onClick={() => props.onRecipeEdit(recipe)}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
