import "./Review.css";

const Review = ({ review }) => {
  return (
    <div className="review">
      <p><b>{review.user}</b></p>
      <p>{review.review}</p>
    </div>
  );
};

export default Review;
