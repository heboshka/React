import React from "react";
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div >
      <NavLink className="Nav_link" to="/">Main</NavLink>
      <br></br>
      <NavLink className="Nav_link" to="/Employees">Employees</NavLink>

    </div>
  );
};

export default Navigation;