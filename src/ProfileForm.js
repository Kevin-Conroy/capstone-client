import React from "react";

class ProfileForm extends React.Component {
  constructor(props) {
    
    super(props);
    this.state = props.profile || {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      bandname: "",
      bio: "",
    };
  }

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

  handleSubmit(event) {
      event.preventDefault();
      this.props.handleSubmit(this.state)
  }

  render() {
    return (
      <form>
        <label>First name:</label>
        <input
          type="text"
          id="firstname"
          value={this.state.firstName}
          onChange={(event) => this.updateFirstName(event.target.value)}
        ></input>
        <br></br>
        <label>Last name:</label>
        <input
          type="text"
          id="lastname"
          value={this.state.lastName}
          onChange={(event) => this.updateLastName(event.target.value)}
        ></input>
        <br></br>
        <label>Username:</label>
        <input
          type="text"
          id="username"
          value={this.state.username}
          onChange={(event) => this.updateUsername(event.target.value)}
        ></input>
        <br></br>
        <label>Password</label>
        <input
          type="text"
          id="password"
          value={this.state.password}
          onChange={(event) => this.updatePassword(event.target.value)}
        ></input>
        <br></br>
        <label>Your band(s):</label>
        <input
          type="text"
          id="bandname"
          value={this.state.bandname}
          onChange={(event) => this.updateBandName(event.target.value)}
        ></input>
        <br></br>
        <label>Bio:</label>
        <input
          type="text"
          id="bio"
          value={this.state.bio}
          onChange={(event) => this.updateBio(event.target.value)}
        ></input>
        <br></br>

        <button onClick={this.handleSubmit.bind(this)}>
          Submit
        </button>
      </form>
    );
  }
}

export default ProfileForm;