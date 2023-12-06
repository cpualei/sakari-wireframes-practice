import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./CreateSpot.css";

const CreateSpot = () => {
  const history = useHistory();

  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      country,
      address,
      city,
      state,
      lat,
      lng,
      description,
      title,
      price,
      img
    }

    console.log("form has been submitted", data);
    window.alert("Your spot was successfully created!");
  };

  return (
    <div id="create-form-container">
      <form onSubmit={handleSubmit}>
        <h1>Create a new Spot</h1>
        <div className="form-sections">
          <h2>Where's your place located?</h2>
          <p>
            Guests will only get your exact address once they booked a
            reservation.
          </p>
          <label>Country</label>
          <input
            type="text"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <label>Street Address</label>
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <div className="first-section-last-two-rows second-to-last-row">
            <div>
              <label>City</label>
              <br />
              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              &nbsp;, &nbsp;
            </div>
            <div>
              <label>State</label>
              <br />
              <input
                type="text"
                placeholder="STATE"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
          </div>
          <div className="first-section-last-two-rows last-row">
            <div>
              <label>Latitude</label>
              <br />
              <input
                type="text"
                placeholder="Latitude"
                value={lat}
                onChange={(e) => setLat(e.target.value)}
              />
              &nbsp;, &nbsp;
            </div>
            <div>
              <label>Longitude</label>
              <br />
              <input
                type="text"
                placeholder="Longitude"
                value={lng}
                onChange={(e) => setLng(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="form-sections">
          <h2>Describe your place to guests</h2>
          <p>
            Mention the best features of your space, any special amentities like
            fast wif or parking, and what you love about the neighborhood.
          </p>
          <textarea
            id="description-textbox"
            type="text"
            placeholder="Please write at least 30 characters"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-sections">
          <h2>Create a title for your spot</h2>
          <p>
            Catch guests' attention with a spot title that highlights what makes
            your place special.
          </p>
          <input
            type="text"
            placeholder="Name of your spot"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-sections">
          <h2>Set a base price for your spot</h2>
          <p>
            Competitive pricing can help your listing stand out and rank higher
            in search results.
          </p>
          <span>
            <b>$</b> &nbsp;
            <input
              type="text"
              placeholder="Price per night (USD)"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </span>
        </div>
        <div className="form-sections">
          <h2>Liven up your spot with photos</h2>
          <p>Submit a link to at least one photo to publish your spot.</p>
          <input
            type="text"
            placeholder="Preview Image URL"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
          <input type="text" placeholder="Image URL" />
          <input type="text" placeholder="Image URL" />
          <input type="text" placeholder="Image URL" />
          <input type="text" placeholder="Image URL" />
        </div>
        <div id="create-spot-button-container">
          <button type="submit">Create a Spot</button>
        </div>
      </form>
    </div>
  );
};

export default CreateSpot;
