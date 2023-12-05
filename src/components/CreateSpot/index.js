const CreateSpot = () => {
  return (
    <form>
      <h1>Create a new Spot</h1>
      <div>
        <h3>Where's your place located?</h3>
        <p>
          Guests will only get your exact address once they booked a
          reservation.
        </p>
        <label>Country</label>
        <input type="text" placeholder="Country" />
        <label>Street Address</label>
        <input type="text" placeholder="Address" />
        <label>City</label>
        <input type="text" placeholder="City" />
        <label>State</label>
        <input type="text" placeholder="STATE" />
        <label>Latitude</label>
        <input type="text" placeholder="Latitude" />
        <label>Longitude</label>
        <input type="text" placeholder="Longitude" />
      </div>
      <div>
        <h3>Describe your place to guests</h3>
        <p>
          Mention the best features of your space, any special amentities like
          fast wif or parking, and what you love about the neighborhood.
        </p>
        <input
          type="textbox"
          placeholder="Please write at least 30 characters"
        />
      </div>
      <div>
        <h3>Create a title for your spot</h3>
        <p>
          Catch guests' attention with a spot title that highlights what makes
          your place special.
        </p>
        <input type="textbox" placeholder="Name of your spot" />
      </div>
      <div>
        <h3>Set a base price for your spot</h3>
        <p>
          Competitive pricing can help your listing stand out and rank higher in
          search results.
        </p>
        <input type="text" placeholder="Price per night (USD)" />
      </div>
      <div>
        <h3>Liven up your spot with photos</h3>
        <p>Submit a link to at least one photo to publish your spot.</p>
        <input type="text" placeholder="Preview Image URL" />
        <input type="text" placeholder="Image URL" />
        <input type="text" placeholder="Image URL" />
        <input type="text" placeholder="Image URL" />
        <input type="text" placeholder="Image URL" />
      </div>
      <button type="submit">Create a Spot</button>
    </form>
  );
};

export default CreateSpot;
