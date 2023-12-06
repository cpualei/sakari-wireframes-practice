import "./CreateSpot.css";

const CreateSpot = () => {
  return (
    <div id="create-form-container">
      <form>
        <h1>Create a new Spot</h1>
        <div className="form-sections">
          <h2>Where's your place located?</h2>
          <p>
            Guests will only get your exact address once they booked a
            reservation.
          </p>
          <label>Country</label>
          <input type="text" placeholder="Country" />
          <label>Street Address</label>
          <input type="text" placeholder="Address" />
          <div className="first-section-last-two-rows second-to-last-row">
            <div>
              <label>City</label>
              <br />
              <input type="text" placeholder="City" />
              &nbsp;, &nbsp;
            </div>
            <div>
              <label>State</label>
              <br />
              <input type="text" placeholder="STATE" />
            </div>
          </div>
          <div className="first-section-last-two-rows last-row">
            <div>
              <label>Latitude</label>
              <br />
              <input type="text" placeholder="Latitude" />
              &nbsp;, &nbsp;
            </div>
            <div>
              <label>Longitude</label>
              <br />
              <input type="text" placeholder="Longitude" />
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
          />
        </div>
        <div className="form-sections">
          <h2>Create a title for your spot</h2>
          <p>
            Catch guests' attention with a spot title that highlights what makes
            your place special.
          </p>
          <input type="text" placeholder="Name of your spot" />
        </div>
        <div className="form-sections">
          <h2>Set a base price for your spot</h2>
          <p>
            Competitive pricing can help your listing stand out and rank higher
            in search results.
          </p>
          <span>
            <b>$</b> &nbsp;
            <input type="text" placeholder="Price per night (USD)" />
          </span>
        </div>
        <div className="form-sections">
          <h2>Liven up your spot with photos</h2>
          <p>Submit a link to at least one photo to publish your spot.</p>
          <input type="text" placeholder="Preview Image URL" />
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
