const Review = ({ review }) => {
    return (
        <div>
            {review.user}
            {review.review}
        </div>
    )
}

export default Review;
