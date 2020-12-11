import React from 'react';
import '../App.css';

function IngredientList(props) {
  let mappedIngredients = props.allIngredients.map((ingredient, id) => 
    <li key={id}>{ingredient.name} <button name={ingredient.name} onClick={(e) => props.moveIngredient(e, id)}> Add to burger </button></li>)
  return(
    <div className="ingredientList">
      <div>Menu Items:</div>
      <ul>
        {mappedIngredients}
      </ul>
    </div>
  )
}


export default IngredientList;