import Review from "../Review";
import "./Reviews.css";

const Reviews = ({ reviews }) => {
  return (
    <>
      {reviews.length === 1 ? (
        <h2>{reviews.length} review</h2>
      ) : (
        <h2>{reviews.length} reviews</h2>
      )}
      <div>
        {reviews.map((review, idx) => (
          <Review review={review} key={idx + 1}/>
        ))}
      </div>
    </>
  );
};

export default Reviews;
