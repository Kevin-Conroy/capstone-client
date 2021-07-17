import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Profile from "./Profile";

class ArtistSearch extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
   
    artistName: "",
    }

  this.handleArtistSearch = this.handleArtistSearch.bind(this)

  };

  handleArtistSearch(artistName) {
    this.setState({ artistName });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted");
  }
/*
  componentDidMount() {
    fetch('https://food-on-tour-api.herokuapp.com/profiles')
      .then(response => response.json())
      .then(artists => {
        console.log(artists);
        this.setState({ artists })
      });
  }
*/
  render() {
    return (
      <div>
        <label for="artist">Search for a Band/Artist:</label>
        <br></br>
        <input
          type="text"
          id="artistName"
          value={this.state.artistName}
          onChange={(event) => this.handleArtistSearch(event.target.value)}
        ></input>
        <br></br>

        <div>
          {this.props.profiles
            .filter((profile) => {
              if (!this.state.artistName) {
                return profile;
              } else if (
                profile.first_name
                  .toLowerCase()
                  .includes(this.state.artistName.toLowerCase())
              ) {
                return profile;
              }
            })
            .map((profile, key) => {
              return <div>
                <Link to={"/profile/" + profile.id}>{profile.first_name} {profile.last_name}</Link>
              </div>;
            })}
        </div>
      </div>
    );
  }
}

export default ArtistSearch;
