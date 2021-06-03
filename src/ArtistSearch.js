import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import artists from "./ArtistData";
import Profile from "./Profile";

class ArtistSearch extends React.Component {
  state = {
    artistName: "",
  };

  handleArtistSearch(artistName) {
    this.setState({ artistName });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted");
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
          {artists
            .filter((artist) => {
              if (this.state.artistName == "") {
                return artist;
              } else if (
                artist.firstName
                  .toLowerCase()
                  .includes(this.state.artistName.toLowerCase())
              ) {
                return artist;
              }
            })
            .map((artist, key) => {
              return <div>
                <Link to={"/profile/" + artist.id}>{artist.firstName} {artist.lastName}</Link>
              </div>;
            })}
        </div>
      </div>
    );
  }
}

export default ArtistSearch;
