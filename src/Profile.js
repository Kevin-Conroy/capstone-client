import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import AddRecommendation from "./AddRecommendation";
import RestaurantListing from "./RestaurantListing";

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
    const redirect = this.props.profile;

    if (!redirect) {
      alert("Please create a profile first");
      return <Redirect to="/createprofile" />;
    }

    return (
      <div>
        <h1>
          Name: {this.props.profile.firstName} {this.props.profile.lastName}
        </h1>
        <img
          src={this.props.profile.profilePicture}
          alt="Profile Picture"
        ></img>
        <h3>Band/Artist: {this.props.profile.bandname}</h3>
        <h5>About me: {this.props.profile.bio}</h5>
        {this.props.profile.id === this.props.userId && (
          <Link to="/editprofile">
            <button>Edit My Profile</button>
          </Link>
        )}
        {this.props.profile.id === this.props.userId && (
          <AddRecommendation addRecommendation={this.addRecommendation} />
        )}
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
        
        
        ))
        }</div>
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

  
            
*/
