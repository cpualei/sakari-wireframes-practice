import { useParams } from "react-router-dom";
import "./SpotDetails.css";
import data from "../../seeds/data.json";

const SpotDetails = () => {
  const { spotId } = useParams();
  const spot = data[spotId];

  return (
    <div className="spot-details-container">
        <div className="spot-details">

      <h1>{spot.name}</h1>
      <p>
        {spot.city}, {spot.state}, {spot.country}
      </p>
      <div className="images-grid">
        <img className="large-image" src={spot.image} alt="spot-image" />
        <div className="small-images-container">
          <div>
            <img className="small-images" src={spot.image} alt="spot-image" />
            <img className="small-images" src={spot.image} alt="spot-image" />
          </div>
          <div>
            <img className="small-images" src={spot.image} alt="spot-image" />
            <img className="small-images" src={spot.image} alt="spot-image" />
          </div>
        </div>
      </div>
      <div className="details">
        <div>
          <span>
            Hosted by {spot.owner.firstName} {spot.owner.lastName}
          </span>
          <p>{spot.description}</p>
        </div>
        <div className="box">
          <span className="box-info">
            <p>${spot.price} night</p>
            <p>
              <i class="fa-solid fa-star"></i>
              {spot.numStars}
            </p>
          </span>
          <button>Reserve</button>
        </div>
      </div>
        </div>
    </div>
  );
};

export default SpotDetails;
