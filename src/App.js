import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Welcome from "./Welcome";
import Header from "./Header";
import CreateProfile from "./CreateProfile";
import ArtistSearch from "./ArtistSearch";
import BucketList from "./BucketList";
import SearchCity from "./SearchCity";
import NavBar from "./NavBar";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addProfile = this.addProfile.bind(this);
    this.updateProfile = this.updateProfile.bind(this);

    this.state = {
      profiles: [],
      userId: "",
      
    };
  }

  addProfile(profile) {
    this.setState({
      profiles: [...this.state.profiles, profile],
      userId: profile.id,
    });
  }

  updateProfile(profile) {
    const otherProfiles = this.state.profiles.filter(
      (p) => p.id !== profile.id
    );
    this.setState({
      profiles: [...otherProfiles, profile],
    });
  }


  render() {
    return (
      <main className="App">
        <div>
          <Router>
            <Header />
            <NavBar />

            <Route exact path="/" component={Welcome} />
            <Route
              exact
              path="/createprofile"
              render={(props) => (
                <CreateProfile addProfile={this.addProfile} {...props} />
              )}
            />
            <Route exact path="/artistsearch" component={ArtistSearch} />
            <Route exact path="/searchcity" component={SearchCity} />
            <Route
              exact
              path="/profile/:id?"
              render={(props) => {
                const profile = this.state.profiles.find(
                  (p) => p.id === this.state.userId
                );

                return (
                  <Profile
                    addProfile={this.addProfile}
                    addRecommendation={this.addRecommendation}
                    addToBucketList={this.addToBucketList}
                    updateProfile={this.updateProfile}
                    profile={profile}
                    {...props}

                  />
                );
              }}
            />
            <Route
              exact
              path="/editprofile"
              render={(props) => {
                const profile = this.state.profiles.find(
                  (p) => p.id === this.state.userId
                );

                return (
                  <EditProfile
                    updateProfile={this.updateProfile}
                    profile={profile}
                    {...props}
                  />
                );
              }}
            />
          </Router>
        </div>
      </main>
    );
  }
}

export default App;
