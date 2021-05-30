import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import restaurants from "./RestaurantData";
import RestaurantListing from "./RestaurantListing";

class SearchCity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
  }

  handleUpdateSearchTerm(searchTerm) {
    this.setState({ searchTerm })
  }

  addToBucketList() {
    this.props.addToBucketList()
  }
  


  render() {
    return (
      <div>
        <form>
          <br></br>
          <label for="city">Search by city:</label>
          <br></br>
          <input
          type="text"
          id="searchTerm"
          value={this.state.searchTerm}
          onChange={(event) => this.handleUpdateSearchTerm(event.target.value)}
        ></input>
          <br></br>
        
        <div>
          {restaurants.filter((restaurant) => {
           if (this.state.searchTerm == "") {
             return restaurant
           } else if (restaurant.city.toLowerCase().includes(this.state.searchTerm.toLowerCase())) {
             return restaurant
           }
          }).map((restaurant, key) => {
            return (
              <RestaurantListing
                name={restaurant.name}
                city={restaurant.city}
                state={restaurant.state}
                website={restaurant.website}
                price={restaurant.price}
                addToBucketList={this.addToBucketList}
              />
            );
          })}
        </div>
        </form>
      </div>
    );
  }
}

export default SearchCity;

/*
<div>
        <form>
          <label for="city">Search by city:</label>
          <br></br>
          <input type="text" id="city" name="city"></input>
          <br></br>
          <label for="cost">Per Diem:</label>
          <br></br>
          <select name="price" id="price">
            <option value="$">$</option>
            <option value="$$">$$</option>
            <option value="$$$">$$$</option>
            <option value="$$$$">$$$$</option>
          </select>
        </form>


*/
