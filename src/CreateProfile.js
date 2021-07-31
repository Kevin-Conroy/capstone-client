import React from "react";
import ProfileForm from "./ProfileForm";

class CreateProfile extends React.Component {
  handleSubmit = (profile) => {
    const url ='https://food-on-tour-api.herokuapp.com/profiles';
    const options = {
      method: 'POST',
      body: JSON.stringify(profile),
      headers: {
        "Content-Type": "application/json",
      }
    };
    fetch(url, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later');
        }
        return res.json();
      })
      .then(data => {
        this.setState({

          firstName: "",
          lastName: "",
          userName: "",
          password: "",
          bandname: "",
          bio: "",
          profilePicture: ""
          
        
        });
        this.props.addProfile(data);
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
 
  };

  render() {
    return (
      <div>
        <h2>Create My Profile</h2>
        <ProfileForm handleSubmit={this.handleSubmit} profiles={this.props.profiles} />
      </div>
    );
  }
}

export default CreateProfile;
