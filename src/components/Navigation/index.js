import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <div id="nav-left">
        <NavLink id="home-link" to="/">airbnb</NavLink>
      </div>
      <div id="nav-right">dropdown</div>
    </nav>
  );
};

export default Navigation;
