import { NavLink } from "react-router-dom";
import "./SpotTile.css";

const SpotTile = ({ spot, id }) => {
  return (
    <div className="tile">
      <NavLink to={`/spots/${id}`}>
        <img src={spot.image} alt="spot-image" />
        <span className="tile-details">
          <p>
            {spot.city}, {spot.state}
          </p>
          <p>
            <i class="fa-solid fa-star"></i>
            {spot.numStars}
          </p>
        </span>
        <p>
          <b>${spot.price}</b> night
        </p>
      </NavLink>
    </div>
  );
};

export default SpotTile;
