import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class AddRecommendation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      city: "",
      state: "",
      website: "",
      priceRange: "",
    };
  }



  addRecommendation = () => {
    //this.props.addRecommendation();
    
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://food-on-tour-api.herokuapp.com/profiles`).then(response => (response.json));
    this.props.addRecommendation(this.state);
  };

  handleInput = (field) => (event) => {
    this.setState({ [field]: event.target.value });
  };

  render() {
    return (
      <div>
        <h4>My Recommendations</h4>
        <form onSubmit={this.handleSubmit}>
          <input
            id="name"
            type="text"
            placeholder="Restaurant Name"
            onChange={this.handleInput("name")}
          />
          <br></br>
          <input
            id="city"
            type="text"
            placeholder="City"
            onChange={this.handleInput("city")}
          />
          <br></br>
          <input
            id="state"
            type="text"
            placeholder="State"
            onChange={this.handleInput("state")}
          />
          <br></br>
          <input
            id="website"
            type="text"
            placeholder="Website"
            onChange={this.handleInput("website")}
          />
          <br></br>
          <input
            id="price"
            type="text"
            placeholder="Price Range ($ - $$$$)"
            onChange={this.handleInput("price")}
          />
          <br></br>
          <button type="submit">
            Add Recommendation
          </button>
        </form>
      </div>
    );
  }
}

export default AddRecommendation;
