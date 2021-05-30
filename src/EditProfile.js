import React from "react";
import ProfileForm from "./ProfileForm"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

class EditProfile extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    bandname: "",
    bio: "",
  };

  updateFirstName(firstName) {
    this.setState({ firstName });
  }

  updateLastName(lastName) {
    this.setState({ lastName });
  }

  updateUsername(username) {
    this.setState({ username });
  }

  updatePassword(password) {
    this.setState({ password });
  }

  updateBandName(bandname) {
    this.setState({ bandname });
  }

  updateBio(bio) {
    this.setState({ bio });
  }

  handleUpdateProfile(profile) {
    this.props.updateProfile(profile);
    this.props.history.push("/profile")
  }

  render() {
    return (
      <div>
        <h2>Edit My Profile</h2>
        <ProfileForm
          handleSubmit={this.handleUpdateProfile.bind(this)}
          profile={this.props.profile}
        />
      </div>
    );
  }
}

export default EditProfile;
