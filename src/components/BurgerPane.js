import React from 'react';
import '../App.css';

function BurgerPane (props) {
  const newBurger = props.burger.map((burgerPart, id) => 
  <li key={id}> {burgerPart.name}</li>)
 
  
  return(
    <div className="burgerPane">
      
      <hr></hr>
      <span>Burger Stacking Area</span>
      <br/>
      <ul className="bulletpoint">
        {newBurger}
      </ul>
      <button type="reset" onClick={props.clear}>Trash it</button>
    </div>
  )
}

export default BurgerPane;
