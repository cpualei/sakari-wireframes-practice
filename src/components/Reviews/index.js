import Review from "../Review";
import "./Reviews.css";

const Reviews = ({ numStars, reviews }) => {
  // let handleReviewsHeader;
  const handleReviewsHeader = (reviews) => {
    if (reviews.length > 1) return <h2>{reviews.length} reviews</h2>;
    if (reviews.length === 1) return <h2>{reviews.length} review</h2>;
    if (reviews.length === 0) return <h2>New</h2>;
  };

  const reviewsHeader = handleReviewsHeader(reviews);

  return (
    <div className="reviews">
      <div className="reviews-header">
        <i class="fa-solid fa-star"></i> {numStars} &nbsp; · &nbsp;
        {reviewsHeader}
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
