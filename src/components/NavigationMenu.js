import React from "react";
import { Link } from "react-router-dom";

function NavigationMenu(props) {
  return (
    <div>
      <div className="font-bold py-3">My Recipes</div>
      <ul>
        <li>
          <Link
            to="/"
            className="text-blue-500 py-3 border-t border-b block"
            onClick={props.closeMenu}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            className="text-blue-500 py-3 border-b block"
            onClick={props.closeMenu}
          >
            About
          </Link>
        </li>
        
        <li>
          <Link 
            to="/recipes"
            className="text-blue-500 py-3 border-b block"
            onClick={props.closeMenu}
          >
            Saved Recipes
          </Link>

        </li>

      </ul>
    </div>
  );
}

export default NavigationMenu;
