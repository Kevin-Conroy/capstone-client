import React from "react";
import "./App.css";

class RestaurantListing extends React.Component {
  constructor(props) {
    super(props);
    this.addBucketListItem = this.addBucketListItem.bind(this)
  }

  addBucketListItem(restaurant) {
      this.props.addBucketListItem()
  }

  render() {
    return (
      <main className="box">
        <div>
          <h3>Name: {this.props.name}</h3>
          <h5>City: {this.props.city}</h5>
          <h5>State: {this.props.state}</h5>
          <h5>
            <a href={this.props.website} target="_blank">
              Go to their site
            </a>
          </h5>
          <h5>Price Range: {this.props.price}</h5>
          <button onClick={this.props.addBucketListItem}>
            Add to my bucketlist
          </button>
        </div>
      </main>
    );
  }
}

export default RestaurantListing;
