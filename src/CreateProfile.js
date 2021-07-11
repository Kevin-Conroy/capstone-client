import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  push,
} from "react-router-dom";
import { v4 as uuid } from "uuid";
import ProfileForm from "./ProfileForm";

class CreateProfile extends React.Component {
  handleSubmit = (profile) => {
    this.props.addProfile({ ...profile, recommendations: [], bucketList: [] });
    this.props.history.push("/profile");
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Create My Profile</h2>
        <ProfileForm handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default CreateProfile;
