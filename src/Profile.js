import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddRecommendation from "./AddRecommendation";
import RestaurantListing from "./RestaurantListing";
import BucketList from "./BucketList";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    
    this.addRecommendation = this.addRecommendation.bind(this);
    this.addBucketListItem = this.addBucketListItem.bind(this);
  }

  addBucketListItem(item) {
    this.props.updateProfile({
      ...this.props.profile,
      bucketList: [...this.props.profile.bucketList, item],
    });
  }

  addRecommendation(rec) {
    this.props.updateProfile({
      ...this.props.profile,
      recommendations: [...this.props.profile.recommendations, rec],
    });
  }

  render() {
    return (
      <div>
        <h1>
          Name: {this.props.profile.firstName} {this.props.profile.lastName}
        </h1>
        <h3>Band/Artist: {this.props.profile.artistName}</h3>
        <h5>About me: {this.props.profile.bio}</h5>

        <Link to="/editprofile">
          <button>Edit My Profile</button>
        </Link>
        <AddRecommendation addRecommendation={this.addRecommendation} />
        {this.props.profile.recommendations.map((restaurant) => (
          <RestaurantListing
            restaurant={restaurant}
            addBucketListItem={this.addBucketListItem}
          />
        ))}
        <h3>Bucket List</h3>
        {this.props.profile.bucketList.map((item) => (
          <RestaurantListing
            restaurant={item}
            addBucketListItem={this.addBucketListItem}
          />
        ))}
      </div>
    );
  }
}

export default Profile;

/*

state = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    bandname: "",
    bio: "",
  };
name={rec.name}
            city={rec.city}
            state={rec.state}
            website={rec.website}
            price={rec.price}
            addBucketListItem={this.addBucketListItem}

  
            
*/
