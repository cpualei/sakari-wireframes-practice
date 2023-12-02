import SpotTile from "../SpotTile";
import "./Spots.css";
import spotsData from "../../seeds/spotsData.json";

const Spots = () => {
  const spots = Object.values(spotsData);

  return (
    <div className="spots-container">
      <div>
    <div className="spots">
      {spots.map((spot, idx) => (
        <SpotTile spot={spot} id={idx + 1} key={idx + 1} />
      ))}
    </div>
      </div>
    </div>
  );
};

export default Spots;
