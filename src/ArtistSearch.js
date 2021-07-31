import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class ArtistSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      artistName: "",
    };

    this.handleArtistSearch = this.handleArtistSearch.bind(this);
  }

  handleArtistSearch(artistName) {
    this.setState({ artistName });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

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
              return (
                <div>
                  <Link
                    style={{ color: "lightblue" }}
                    to={"/profile/" + profile.id}
                  >
                    {profile.firstName} {profile.lastName}
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default ArtistSearch;
