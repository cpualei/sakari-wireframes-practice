import Review from "../Review";
import "./Reviews.css";

const Reviews = ({ numStars, reviews, numOfReviews }) => {
  return (
    <div className="reviews">
      <div className="reviews-header">
        <h2>
          <i class="fa-solid fa-star"></i> {numStars} &nbsp; · &nbsp;
          {numOfReviews}
        </h2>
      </div>
      <div>
        {reviews.map((review, idx) => (
          <Review review={review} key={idx + 1} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
