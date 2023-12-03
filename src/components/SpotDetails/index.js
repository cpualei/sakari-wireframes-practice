import { useParams } from "react-router-dom";
import Reviews from "../Reviews";
import "./SpotDetails.css";
import spotsData from "../../seeds/spotsData.json";

const SpotDetails = () => {
  const { spotId } = useParams();
  const spot = spotsData[spotId];

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
            <div className="image-columns">
              <img className="small-images" src={spot.image} alt="spot-image" />
              <img
                className="small-images bottom-images"
                src={spot.image}
                alt="spot-image"
              />
            </div>
            <div class="image-columns">
              <img className="small-images" src={spot.image} alt="spot-image" />
              <img
                className="small-images bottom-images"
                src={spot.image}
                alt="spot-image"
              />
            </div>
          </div>
        </div>
        <div className="details">
          <div className="owner-and-description">
            <span>
              <h2>
                Hosted by {spot.owner.firstName} {spot.owner.lastName}
              </h2>
            </span>
            <p>{spot.description}</p>
          </div>
          <div className="box">
            <span className="box-info">
              <p>
                <b style={{ fontSize: "20px" }}>${spot.price}</b> night
              </p>
              <p>
                <i class="fa-solid fa-star"></i>
                {spot.numStars}
              </p>
            </span>
            <button onClick={() => window.alert("Feature coming soon...")}>
              Reserve
            </button>
          </div>
        </div>
      </div>
      <div>
        <Reviews numStars={spot.numStars} reviews={spot.reviews}/>
      </div>
    </div>
  );
};

export default SpotDetails;
