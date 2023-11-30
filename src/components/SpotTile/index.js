import "./SpotTile.css";

const SpotTile = ({ spot }) => {
  return (
    <div className="tile">
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
      <p><b>${spot.price}</b> night</p>
    </div>
  );
};

export default SpotTile;
