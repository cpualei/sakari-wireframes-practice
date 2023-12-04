import { useParams } from "react-router-dom";
import DetailsBox from "./DetailsBox";
import Reviews from "../Reviews";
import "./SpotDetails.css";
import spotsData from "../../seeds/spotsData.json";

const SpotDetails = () => {
  const { spotId } = useParams();
  const spot = spotsData[spotId];

  const handleNumOfReviews = (reviews) => {
    if (reviews.length > 1) return `${reviews.length} reviews`;
    if (reviews.length === 1) return `${reviews.length} review`;
    if (reviews.length === 0) return `New`;
  };

  const numOfReviews = handleNumOfReviews(spot.reviews);

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
          <DetailsBox
            price={spot.price}
            numStars={spot.numStars}
            numOfReviews={numOfReviews}
          />
        </div>
      </div>
      <Reviews
        numStars={spot.numStars}
        reviews={spot.reviews}
        numOfReviews={numOfReviews}
      />
    </div>
  );
};

export default SpotDetails;
