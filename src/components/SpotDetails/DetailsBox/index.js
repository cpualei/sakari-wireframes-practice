import "../SpotDetails.css";

const DetailsBox = ({ price, numStars, numOfReviews }) => {
  return (
    <div className="box">
      <span className="box-info">
        <p>
          <b style={{ fontSize: "20px" }}>${price}</b> night
        </p>
        <p>
          <i class="fa-solid fa-star"></i>
          {numStars} &nbsp; · &nbsp; {numOfReviews}
        </p>
      </span>
      <button onClick={() => window.alert("Feature coming soon...")}>
        Reserve
      </button>
    </div>
  );
};

export default DetailsBox;
