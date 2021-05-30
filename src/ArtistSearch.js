import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
        <form>
          <label>Artist name:</label>
          <input
            type="text"
            id="artistname"
            name="artistname"
            value={this.state.artistName}
            onChange={(event) => this.handleArtistSearch(event.target.value)}
          ></input>
          <button onClick={(event) => this.handleSubmit(event)}>Search</button>
        </form>
      </div>
    );
  }
}

export default ArtistSearch;
