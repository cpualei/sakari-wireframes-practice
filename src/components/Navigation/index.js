import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <div id="nav-left">
        <NavLink id="home-link" to="/">
          <i class="fa-brands fa-airbnb"></i>
          <p>airbnb</p>
        </NavLink>
      </div>
      <div id="nav-right" onClick={() => window.alert("Dropdown menu feature coming soon...")}>
        <i class="fa-solid fa-bars"></i>
        <i class="fa-solid fa-circle-user"></i>
      </div>
    </nav>
  );
};

export default Navigation;
