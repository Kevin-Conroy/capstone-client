import React from "react";
import "./App.css";

class RestaurantListing extends React.Component {
  constructor(props) {
    super(props);
    this.addBucketListItem = this.addBucketListItem.bind(this);
  }

  addBucketListItem() {
    this.props.addBucketListItem();
  }

  render() {
    return (
      <main className="box">
        <div>
          <h3>Name: {this.props.restaurant.name}</h3>
          <h5>City: {this.props.restaurant.city}</h5>
          <h5>State: {this.props.restaurant.state}</h5>
          <h5>
            <a href={this.props.restaurant.website} target="_blank">
              Go to their site
            </a>
          </h5>
          <h5>Price Range: {this.props.restaurant.price}</h5>
          <button type="button" onClick={this.props.restaurant.addBucketListItem}>
            Add to my bucketlist
          </button>
        </div>
      </main>
    );
  }
}

export default RestaurantListing;
