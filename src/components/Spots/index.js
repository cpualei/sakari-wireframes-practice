import SpotTile from "../SpotTile";
import "./Spots.css";
import data from "../../seeds/data.json";

const Spots = () => {
  const spots = Object.values(data);
  return (
    <div className="spots">
      {spots.map((spot, idx) => (
        <SpotTile spot={spot} id={idx + 1} key={idx + 1} />
      ))}
    </div>
  );
};

export default Spots;
