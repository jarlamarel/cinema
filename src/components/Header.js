import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
            <NavLink to="/" className={(nav)=>(nav.isActive? "nav-active":"")}><li>acceuil</li></NavLink>
            <NavLink to="/coup-de-coeur"className={(nav)=>(nav.isActive? "nav-active":"")}><li>coup de coeur</li></NavLink>
        </ul>
      </nav>
      <h1>dali movies</h1>
    </div>
  );
};

export default Header;
