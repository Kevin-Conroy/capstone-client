import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import restaurants from "./RestaurantData";

class BucketList extends React.Component {
  state = {
    bucketList: [],
  };

  render() {
    return (
      <div>
        <h2>Bucket List</h2>

        <h4></h4>
      </div>
    );
  }
}

export default BucketList;
